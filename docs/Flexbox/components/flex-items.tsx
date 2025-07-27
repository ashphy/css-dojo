export function FlexItem({ children }: { children?: React.ReactNode }) {
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
      }}
    >
      {children}
    </div>
  );
}
