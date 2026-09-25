const NODES = [
  { x: 8, y: 20 }, { x: 22, y: 55 }, { x: 15, y: 85 }, { x: 38, y: 12 },
  { x: 45, y: 68 }, { x: 58, y: 30 }, { x: 65, y: 88 }, { x: 78, y: 15 },
  { x: 85, y: 50 }, { x: 92, y: 78 }, { x: 50, y: 50 }, { x: 30, y: 35 },
];

const LINES = [
  [0, 3], [3, 11], [11, 1], [1, 2], [3, 5], [5, 10], [10, 4], [5, 7],
  [7, 8], [8, 9], [8, 6], [10, 6], [11, 5],
];

export function FinalCtaNetwork() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cta-line" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1593B6" />
          <stop offset="100%" stopColor="#55C67A" />
        </linearGradient>
      </defs>
      {LINES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="url(#cta-line)"
          strokeWidth="0.15"
          strokeDasharray="1.2 1.6"
          className="animate-dash"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {NODES.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="0.5" fill="#6DD58B">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${3 + (i % 4)}s`}
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
