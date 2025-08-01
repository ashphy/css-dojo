import React, { useState } from "react";

interface OrderDemoProps {
  interactive?: boolean;
}

export function OrderDemo({ interactive = true }: OrderDemoProps) {
  const [orders, setOrders] = useState<number[]>([0, 0, 0, 0]);

  const updateOrder = (index: number, value: number) => {
    const newOrders = [...orders];
    newOrders[index] = value;
    setOrders(newOrders);
  };

  const resetOrders = () => {
    setOrders([0, 0, 0, 0]);
  };

  const applyExample = (exampleOrders: number[]) => {
    setOrders(exampleOrders);
  };

  const itemColors = ["#cce5ff", "#d4edda", "#f8d7da", "#fff3cd"];
  const itemNames = ["A", "B", "C", "D"];

  return (
    <div style={{ marginBottom: "20px" }}>
      {interactive && (
        <div style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
              各アイテムのorderを設定:
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              {orders.map((order, index) => (
                <div key={index}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontSize: "14px",
                    }}
                  >
                    アイテム {itemNames[index]}:
                  </label>
                  <input
                    type="number"
                    value={order}
                    onChange={(e) =>
                      updateOrder(index, parseInt(e.target.value) || 0)
                    }
                    min="-10"
                    max="10"
                    style={{
                      width: "60px",
                      padding: "6px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "13px",
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                onClick={resetOrders}
                style={{
                  padding: "6px 12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#f8f9fa",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                リセット
              </button>
              <button
                onClick={() => applyExample([0, 1, -1, 2])}
                style={{
                  padding: "6px 12px",
                  border: "1px solid #007bff",
                  borderRadius: "4px",
                  backgroundColor: "#007bff",
                  color: "#333",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                例1: 逆順
              </button>
              <button
                onClick={() => applyExample([1, 0, 1, 0])}
                style={{
                  padding: "6px 12px",
                  border: "1px solid #28a745",
                  borderRadius: "4px",
                  backgroundColor: "#28a745",
                  color: "#333",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                例2: 交互
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginBottom: "15px" }}>
        <h4 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>HTML順序</h4>
        <div
          style={{
            display: "flex",
            gap: "10px",
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          {itemNames.map((name, index) => (
            <div
              key={index}
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: itemColors[index],
                color: "#333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
          視覚的順序 (order適用後)
        </h4>
        <div
          style={{
            display: "flex",
            gap: "10px",
            padding: "15px",
            backgroundColor: "#e3f2fd",
            borderRadius: "8px",
            border: "2px solid #2196f3",
          }}
        >
          {itemNames.map((name, index) => (
            <div
              key={index}
              style={{
                order: orders[index],
                width: "60px",
                height: "60px",
                backgroundColor: itemColors[index],
                color: "#333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                fontSize: "18px",
                fontWeight: "bold",
                position: "relative",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface OrderExampleProps {
  title: string;
  description: string;
  orders: number[];
}

export function OrderExample({
  title,
  description,
  orders,
}: OrderExampleProps) {
  const itemColors = ["#cce5ff", "#d4edda", "#f8d7da", "#fff3cd"];
  const itemNames = ["A", "B", "C", "D"];

  return (
    <div style={{ marginBottom: "25px" }}>
      <h4 style={{ marginBottom: "5px", fontSize: "16px" }}>{title}</h4>
      <p style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        {description}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        {itemNames.map((name, index) => (
          <div
            key={index}
            style={{
              order: orders[index],
              width: "50px",
              height: "50px",
              backgroundColor: itemColors[index],
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
              position: "relative",
            }}
          >
            {name}
            <span
              style={{
                position: "absolute",
                bottom: "-18px",
                fontSize: "9px",
                color: "#333",
                backgroundColor: "white",
                padding: "1px 3px",
                borderRadius: "2px",
                border: "1px solid #ccc",
              }}
            >
              {orders[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
