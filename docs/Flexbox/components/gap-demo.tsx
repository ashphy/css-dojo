import { useState } from "react";
import { FlexItemFixed } from "./flex-items-fixed";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface GapDemoProps {
  interactive?: boolean;
}

export function GapDemo({ interactive = true }: GapDemoProps = {}) {
  const [rowGap, setRowGap] = useState<number>(10);
  const [columnGap, setColumnGap] = useState<number>(20);
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");

  const flexDirectionOptions: { value: FlexDirection; label: string }[] = [
    { value: "row", label: "row（水平方向）" },
    { value: "row-reverse", label: "row-reverse（水平方向逆順）" },
    { value: "column", label: "column（垂直方向）" },
    { value: "column-reverse", label: "column-reverse（垂直方向逆順）" },
  ];

  const items = Array.from({ length: 6 }, (_, i) => `アイテム ${i + 1}`);

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
          <label htmlFor="row-gap-range">
            row-gap: {rowGap}px
            <input
              type="range"
              id="row-gap-range"
              min="0"
              max="50"
              step="5"
              value={rowGap}
              onChange={(e) => setRowGap(parseInt(e.target.value))}
              style={{
                marginLeft: "8px",
              }}
            />
          </label>

          <label htmlFor="column-gap-range">
            column-gap: {columnGap}px
            <input
              type="range"
              id="column-gap-range"
              min="0"
              max="50"
              step="5"
              value={columnGap}
              onChange={(e) => setColumnGap(parseInt(e.target.value))}
              style={{
                marginLeft: "8px",
              }}
            />
          </label>

          <label htmlFor="flex-direction-select">
            flex-direction:
            <select
              id="flex-direction-select"
              value={flexDirection}
              onChange={(e) =>
                setFlexDirection(e.target.value as FlexDirection)
              }
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
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: flexDirection,
          rowGap: `${rowGap}px`,
          columnGap: `${columnGap}px`,
          padding: "20px",
          border: "2px solid #007acc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          width: "500px",
          height: "300px",
          resize: "both",
          overflow: "auto",
          alignContent: "flex-start",
        }}
      >
        {items.map((item, index) => (
          <FlexItemFixed key={index}>{item}</FlexItemFixed>
        ))}
      </div>
    </div>
  );
}
