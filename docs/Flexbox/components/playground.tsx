import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface PlaygroundProps {
  htmlCode: string;
  cssCode: string;
}

/**
 * Playground component for editing HTML and CSS code.
 */
export function Playground({ htmlCode, cssCode }: PlaygroundProps) {
  const [currentHtmlCode, setCurrentHtmlCode] = useState(htmlCode);
  const [currentCssCode, setCurrentCssCode] = useState(cssCode);

  const generatePreviewContent = (html: string, css: string) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
  };

  const previewContent = generatePreviewContent(currentHtmlCode, currentCssCode);

  const handleHtmlChange = (value: string | undefined) => {
    setCurrentHtmlCode(value || "");
  };

  const handleCssChange = (value: string | undefined) => {
    setCurrentCssCode(value || "");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
      <div style={{ flex: 1 }}>
        <h3>HTML</h3>
        <Editor
          height="200px"
          defaultLanguage="html"
          value={currentHtmlCode}
          onChange={handleHtmlChange}
          options={{ minimap: { enabled: false } }}
        />
        <h3>CSS</h3>
        <Editor
          height="200px"
          defaultLanguage="css"
          value={currentCssCode}
          onChange={handleCssChange}
          options={{ minimap: { enabled: false } }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3>Preview</h3>
        <iframe
          title="Preview"
          srcDoc={previewContent}
          style={{
            width: "100%",
            height: "416px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}
