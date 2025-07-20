function FlexItem({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        flex: "1",
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

export function FlexContainer() {
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
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </div>
  );
}
