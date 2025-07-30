import React, { useState } from "react";

type AlignContentValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

type AlignItemsValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

interface AlignContentDemoProps {
  alignContent?: AlignContentValue;
  alignItems?: AlignItemsValue;
  interactive?: boolean;
}

export function AlignContentDemo({
  alignContent = "flex-start",
  alignItems = "stretch",
  interactive = true,
}: AlignContentDemoProps) {
  const [selectedAlignContent, setSelectedAlignContent] =
    useState<AlignContentValue>(alignContent);
  const [selectedAlignItems, setSelectedAlignItems] =
    useState<AlignItemsValue>(alignItems);

  const alignContentOptions: { value: AlignContentValue; label: string }[] = [
    { value: "flex-start", label: "flex-start" },
    { value: "flex-end", label: "flex-end" },
    { value: "center", label: "center" },
    { value: "space-between", label: "space-between" },
    { value: "space-around", label: "space-around" },
    { value: "space-evenly", label: "space-evenly" },
    { value: "stretch", label: "stretch" },
  ];

  const alignItemsOptions: { value: AlignItemsValue; label: string }[] = [
    { value: "flex-start", label: "flex-start" },
    { value: "flex-end", label: "flex-end" },
    { value: "center", label: "center" },
    { value: "baseline", label: "baseline" },
    { value: "stretch", label: "stretch" },
  ];

  const currentAlignContent = interactive ? selectedAlignContent : alignContent;
  const currentAlignItems = interactive ? selectedAlignItems : alignItems;

  return (
    <div style={{ marginBottom: "20px" }}>
      {interactive && (
        <div style={{ marginBottom: "15px", display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              align-content:
            </label>
            <select
              value={selectedAlignContent}
              onChange={(e) =>
                setSelectedAlignContent(e.target.value as AlignContentValue)
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                width: "100%",
              }}
            >
              {alignContentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              align-items:
            </label>
            <select
              value={selectedAlignItems}
              onChange={(e) =>
                setSelectedAlignItems(e.target.value as AlignItemsValue)
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                width: "100%",
              }}
            >
              {alignItemsOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: currentAlignContent,
          alignItems: currentAlignItems,
          width: "300px",
          height: "200px",
          border: "2px solid #333",
          borderRadius: "8px",
          padding: "10px",
          backgroundColor: "#f8f9fa",
          gap: "10px",
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{
              width: "60px",
              height:
                currentAlignContent === "stretch" ||
                currentAlignItems === "stretch"
                  ? "auto"
                  : `${20 + i * 8}px`,
              backgroundColor: "#007bff",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
