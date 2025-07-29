interface FlexItemFixedProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function FlexItemFixed({ children, style }: FlexItemFixedProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "80px",
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
