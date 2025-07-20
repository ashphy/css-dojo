type FlexContainerProps = {
  children?: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  style?: React.CSSProperties;
};

export function FlexContainer({
  children,
  direction = "row",
  wrap = "nowrap",
  style = {},
}: FlexContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        flexWrap: wrap,
        gap: "10px",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
