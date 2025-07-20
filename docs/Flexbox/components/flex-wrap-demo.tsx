import { useState } from "react";
import { FlexItemFixed } from "./flex-items-fixed";

type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface FlexWrapDemoProps {
  wrapValue?: FlexWrap;
  interactive?: boolean;
}

export function FlexWrapDemo({ wrapValue, interactive = true }: FlexWrapDemoProps = {}) {
  const [flexWrap, setFlexWrap] = useState<FlexWrap>(wrapValue || "nowrap");
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [itemCount, setItemCount] = useState(6);

  const flexWrapOptions: { value: FlexWrap; label: string }[] = [
    { value: "nowrap", label: "nowrap（折り返しなし）" },
    { value: "wrap", label: "wrap（折り返しあり）" },
    { value: "wrap-reverse", label: "wrap-reverse（逆順で折り返し）" },
  ];

  const flexDirectionOptions: { value: FlexDirection; label: string }[] = [
    { value: "row", label: "row（水平方向）" },
    { value: "row-reverse", label: "row-reverse（水平方向逆順）" },
    { value: "column", label: "column（垂直方向）" },
    { value: "column-reverse", label: "column-reverse（垂直方向逆順）" },
  ];

  const items = Array.from(
    { length: itemCount },
    (_, i) => `アイテム ${i + 1}`
  );

  return (
    <div>
{interactive && (
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="flex-wrap-select">
            flex-wrap:
            <select
              id="flex-wrap-select"
              value={flexWrap}
              onChange={(e) => setFlexWrap(e.target.value as FlexWrap)}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                fontSize: "14px",
                marginLeft: "8px",
              }}
            >
              {flexWrapOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="flex-direction-select">
            flex-direction:
            <select
              id="flex-direction-select"
              value={flexDirection}
              onChange={(e) => setFlexDirection(e.target.value as FlexDirection)}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                fontSize: "14px",
                marginLeft: "8px",
              }}
            >
              {flexDirectionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="item-count-range">
            アイテム数: {itemCount}個
            <input
              type="range"
              id="item-count-range"
              min="3"
              max="12"
              step="1"
              value={itemCount}
              onChange={(e) => setItemCount(parseInt(e.target.value))}
              style={{
                marginLeft: "8px",
              }}
            />
          </label>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: flexWrap,
          flexDirection: flexDirection,
          gap: "10px",
          padding: "20px",
          border: "2px solid #007acc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          width: "400px",
          resize: "both",
          overflow: "auto",
        }}
      >
        {items.map((item, index) => (
          <FlexItemFixed
            key={index}
            style={{
              minWidth: "100px",
              minHeight: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item}
          </FlexItemFixed>
        ))}
      </div>
    </div>
  );
}
