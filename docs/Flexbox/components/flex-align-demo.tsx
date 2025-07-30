import React, { useState } from "react";

type AlignValues =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
type JustifyValues =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export function FlexAlignDemo() {
  const [justifyContent, setJustifyContent] =
    useState<JustifyValues>("flex-start");
  const [alignItems, setAlignItems] = useState<AlignValues>("stretch");

  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            justify-content（主軸方向の配置）:
          </label>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value as JustifyValues)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            align-items（交差軸方向の配置）:
          </label>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value as AlignValues)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent,
          alignItems,
          height: "200px",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          gap: "10px",
        }}
      >
        <div
          style={{
            padding: "15px",
            backgroundColor: "#4caf50",
            color: "white",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          アイテム 1
        </div>
        <div
          style={{
            padding: "25px 15px",
            backgroundColor: "#2196f3",
            color: "white",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          アイテム 2<br />
          （高さ異なる）
        </div>
        <div
          style={{
            padding: "10px 15px",
            backgroundColor: "#ff9800",
            color: "white",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          アイテム 3<br />
          （小さめ）
        </div>
      </div>
    </div>
  );
}
