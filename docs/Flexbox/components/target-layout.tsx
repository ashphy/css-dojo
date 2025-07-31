interface TargetLayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function TargetLayout({ children, style }: TargetLayoutProps) {
  return (
    <div style={{ paddingBlock: "20px", borderRadius: "4px" }}>
      <div
        style={{
          color: "var(--ifm-color-primary-contrast-foreground)",
          background: `var(--ifm-color-primary-contrast-background)`,
          padding: "0.5rem 1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.1em" }}>⛳</span>
          目標レイアウト
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          color: "black",
          backgroundColor: "white",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}
