interface FlexItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function FlexItem({ children, style }: FlexItemProps) {
  return (
    <div
      style={{
        flex: "1",
        padding: "15px",
        color: "black",
        backgroundColor: "#e3f2fd",
        borderRadius: "4px",
        textAlign: "center",
        margin: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
