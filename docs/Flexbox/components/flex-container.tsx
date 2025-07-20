type FlexContainerProps = {
  children?: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
};

export function FlexContainer({
  children,
  direction = "row",
}: FlexContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: "10px",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {children}
    </div>
  );
}
