import { useState } from "react";
import { FlexItemFixed } from "./flex-items-fixed";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type WritingMode = "horizontal-tb" | "vertical-rl" | "vertical-lr";
type Direction = "ltr" | "rtl";

export function FlexAxis() {
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [direction, setDirection] = useState<Direction>("ltr");
  const [writingMode, setWritingMode] = useState<WritingMode>("horizontal-tb");

  const flexDirectionOptions: FlexDirection[] = [
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ];

  const directionOptions: { value: Direction; label: string }[] = [
    { value: "ltr", label: "ltr（左から右: 日本語・英語など）" },
    { value: "rtl", label: "rtl（右から左: アラビア語など）" },
  ];

  const writingModeOptions: { value: WritingMode; label: string }[] = [
    { value: "horizontal-tb", label: "horizontal-tb（横書き）" },
    {
      value: "vertical-rl",
      label: "vertical-rl（縦書き・次の行が左に配置される）",
    },
    {
      value: "vertical-lr",
      label: "vertical-lr（縦書き・次の行が右に配置される）",
    },
  ];

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
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
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="direction-select">
          direction:
          <select
            id="direction-select"
            value={direction}
            onChange={(e) => setDirection(e.target.value as Direction)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              fontSize: "14px",
              marginLeft: "8px",
            }}
          >
            {directionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="writing-mode-select">
          writing-mode:
          <select
            id="writing-mode-select"
            value={writingMode}
            onChange={(e) => setWritingMode(e.target.value as WritingMode)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              fontSize: "14px",
              marginLeft: "8px",
            }}
          >
            {writingModeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: flexDirection,
          writingMode: writingMode,
          direction: direction,
          gap: "10px",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          minHeight: "200px",
        }}
      >
        <FlexItemFixed>フレックスアイテム 1</FlexItemFixed>
        <FlexItemFixed>フレックスアイテム 2</FlexItemFixed>
        <FlexItemFixed>フレックスアイテム 3</FlexItemFixed>
      </div>
    </div>
  );
}
