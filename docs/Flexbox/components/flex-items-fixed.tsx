export function FlexItemFixed({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "15px",
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
