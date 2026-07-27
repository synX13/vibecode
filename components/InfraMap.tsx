import site from "@/data/site.json";

export default function InfraMap() {
  const { map } = site;
  const { core, nodes } = map;

  return (
    <section id="map" className="py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-2.5 font-mono text-xs uppercase tracking-[1.5px] text-accent">
          {map.label}
        </div>
        <h2 className="mb-9 max-w-[24ch] font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.5px]">
          {map.title}
        </h2>

        <div className="rounded border border-line bg-surface px-5 pb-2 pt-5">
          <svg
            viewBox="0 0 1000 380"
            className="block h-auto w-full"
            role="img"
            aria-label="Diagram of infrastructure nodes managed by Agus across government institutions in Indonesia and a remote node in France"
          >
            {nodes.map((n) => (
              <line
                key={`edge-${n.name}`}
                x1={core.x}
                y1={core.y}
                x2={n.x}
                y2={n.y}
                className="stroke-line"
                strokeWidth={1}
              />
            ))}

            <circle cx={core.x} cy={core.y} r={8} className="fill-accent" />
            <text
              x={core.x}
              y={core.y + 25}
              textAnchor="middle"
              className="fill-accent font-mono text-[10.5px] font-semibold"
            >
              {core.label}
            </text>

            {nodes.map((n, i) => (
              <g key={n.name}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={4}
                  className={`animate-ping2 fill-none ${
                    n.remote ? "stroke-accent" : "stroke-teal"
                  }`}
                  strokeWidth={1.5}
                  style={{ animationDelay: `${i * 0.25}s` }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={4.5}
                  className={n.remote ? "fill-accent" : "fill-teal"}
                />
                <text
                  x={n.x}
                  y={n.y - 12}
                  textAnchor="middle"
                  className="fill-muted font-mono text-[10.5px]"
                >
                  {n.name}
                </text>
                <text
                  x={n.x}
                  y={n.y + 20}
                  textAnchor="middle"
                  opacity={0.6}
                  className="fill-muted font-mono text-[9px]"
                >
                  {n.sub}
                </text>
              </g>
            ))}
          </svg>
          <div className="py-3.5 text-center font-mono text-xs text-muted">
            {map.caption}
          </div>
        </div>
      </div>
    </section>
  );
}
