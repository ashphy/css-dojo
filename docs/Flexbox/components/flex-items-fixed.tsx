interface FlexItemFixedProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function FlexItemFixed({ children, style }: FlexItemFixedProps) {
  return (
    <div
      style={{
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
