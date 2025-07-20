export function FlexContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
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
