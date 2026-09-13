import React, { useMemo } from 'react';
import type { ArchNode } from '../data/portfolio';

interface ArchitectureDiagramProps {
  stages: ArchNode[][];
  annotation?: string;
}

// Fixed, constant across every project — this is what keeps all diagrams the same visual scale
const NODE_WIDTH = 132;
const NODE_HEIGHT = 60;
const COLUMN_GAP = 56;
const NODE_GAP = 14;
const PADDING_X = 28;
const PADDING_Y = 24;

const ACCENT = '#5B8DFF';
const BORDER = '#262B34';
const BG = '#111318';
const TEXT = '#EDEDED';
const SUBTEXT = '#8B8F98';

function inferKind(label: string): NonNullable<ArchNode['kind']> {
  const l = label.toLowerCase();
  if (l.includes('client')) return 'client';
  if (l.includes('database') || l.includes('data') || l.includes('mongo')) return 'database';
  if (l.includes('queue') || l.includes('worker') || l.includes('job')) return 'queue';
  return 'service';
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ stages, annotation }) => {
  const columns = stages.length;
  const maxNodesInColumn = Math.max(...stages.map((s) => s.length));

  const width = columns * NODE_WIDTH + (columns - 1) * COLUMN_GAP + PADDING_X * 2;
  const height = maxNodesInColumn * NODE_HEIGHT + (maxNodesInColumn - 1) * NODE_GAP + PADDING_Y * 2;

  const columnX = (i: number) => PADDING_X + i * (NODE_WIDTH + COLUMN_GAP);

  const nodePositions = useMemo(() => {
    return stages.map((stage, i) => {
      const stageHeight = stage.length * NODE_HEIGHT + (stage.length - 1) * NODE_GAP;
      const startY = (height - stageHeight) / 2;
      return stage.map((node, j) => ({
        node,
        x: columnX(i),
        y: startY + j * (NODE_HEIGHT + NODE_GAP),
      }));
    });
  }, [stages, height]);

  const centerY = (positions: { y: number }[]) => {
    const ys = positions.map((p) => p.y + NODE_HEIGHT / 2);
    return (Math.min(...ys) + Math.max(...ys)) / 2;
  };

  return (
    <div className="rounded-xl border border-[#1F232B] bg-[#0D0F13] p-4 sm:p-6 overflow-x-auto">
      {/* Fixed pixel size, centered, only shrinks on narrow viewports — never stretched to fill */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
        role="img"
        aria-label="System architecture diagram"
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT} />
          </marker>
        </defs>

        {nodePositions.slice(0, -1).map((positions, i) => {
          const next = nodePositions[i + 1];
          const y1 = centerY(positions);
          const y2 = centerY(next);
          const x1 = columnX(i) + NODE_WIDTH;
          const x2 = columnX(i + 1);
          const midX = (x1 + x2) / 2;
          const d = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
          const pathId = `flow-path-${i}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke={BORDER} strokeWidth={1.5} markerEnd="url(#arrowhead)" />
              <path id={pathId} d={d} fill="none" stroke="none" />
              <circle r={3} fill={ACCENT}>
                <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.3}s`}>
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {nodePositions.map((positions, i) =>
          positions.map(({ node, x, y }, j) => (
            <NodeShape key={`${i}-${j}`} node={node} x={x} y={y} width={NODE_WIDTH} height={NODE_HEIGHT} />
          ))
        )}
      </svg>

      {annotation && (
        <div className="mt-4 pt-4 border-t border-[#1F232B] font-mono text-[11px] text-[#8B8F98] flex items-center gap-2">
          <span className="text-[#5B8DFF]">⇄</span>
          {annotation}
        </div>
      )}
    </div>
  );
};

const NodeShape: React.FC<{ node: ArchNode; x: number; y: number; width: number; height: number }> = ({
  node,
  x,
  y,
  width,
  height,
}) => {
  const kind = node.kind ?? inferKind(node.label);
  return (
    <g transform={`translate(${x}, ${y})`}>
      {kind === 'database' ? (
        <DatabaseShape width={width} height={height} />
      ) : kind === 'queue' ? (
        <QueueShape width={width} height={height} />
      ) : kind === 'client' ? (
        <ClientShape width={width} height={height} />
      ) : (
        <rect width={width} height={height} rx={10} fill={BG} stroke={BORDER} strokeWidth={1.5} />
      )}

      {/* foreignObject wraps text and clips overflow — a long note can never bleed into a neighboring shape */}
      <foreignObject x={4} y={kind === 'client' ? 14 : 4} width={width - 8} height={height - (kind === 'client' ? 18 : 8)}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            fontFamily: 'ui-monospace, monospace',
          }}
        >
          <div
            style={{
              fontSize: '10.5px',
              fontWeight: 600,
              letterSpacing: '0.4px',
              color: TEXT,
              lineHeight: 1.2,
            }}
          >
            {node.label}
          </div>
          {node.note && (
            <div
              style={{
                fontSize: '9px',
                color: SUBTEXT,
                lineHeight: 1.25,
                marginTop: 3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {node.note}
            </div>
          )}
        </div>
      </foreignObject>
    </g>
  );
};

const DatabaseShape: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const ry = 8;
  return (
    <g>
      <path
        d={`M0,${ry} A${width / 2},${ry} 0 0 1 ${width},${ry}
            L${width},${height - ry} A${width / 2},${ry} 0 0 1 0,${height - ry} Z`}
        fill={BG}
        stroke={BORDER}
        strokeWidth={1.5}
      />
      <ellipse cx={width / 2} cy={ry} rx={width / 2} ry={ry} fill={BG} stroke={BORDER} strokeWidth={1.5} />
    </g>
  );
};

const QueueShape: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const o = 6;
  return (
    <g>
      <rect x={o * 2} y={o * 2} width={width - o * 2} height={height - o * 2} rx={8} fill={BG} stroke={BORDER} strokeWidth={1.2} opacity={0.5} />
      <rect x={o} y={o} width={width - o * 2} height={height - o * 2} rx={8} fill={BG} stroke={BORDER} strokeWidth={1.2} opacity={0.75} />
      <rect x={0} y={0} width={width - o * 2} height={height - o * 2} rx={8} fill={BG} stroke={ACCENT} strokeWidth={1.5} strokeOpacity={0.6} />
    </g>
  );
};

const ClientShape: React.FC<{ width: number; height: number }> = ({ width, height }) => (
  <g>
    <rect width={width} height={height} rx={10} fill={BG} stroke={BORDER} strokeWidth={1.5} />
    <rect width={width} height={16} rx={10} fill="#161920" />
    <circle cx={12} cy={8} r={2.5} fill="#FF5F57" />
    <circle cx={20} cy={8} r={2.5} fill="#FEBC2E" />
    <circle cx={28} cy={8} r={2.5} fill="#28C840" />
  </g>
);

export default ArchitectureDiagram;