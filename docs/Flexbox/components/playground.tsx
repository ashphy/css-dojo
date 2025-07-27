import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useColorMode } from "@docusaurus/theme-common";

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

  const { colorMode } = useColorMode();
  const editorTheme = colorMode === "dark" ? "vs-dark" : "vs";

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

  const previewContent = generatePreviewContent(
    currentHtmlCode,
    currentCssCode
  );

  const handleHtmlChange = (value: string | undefined) => {
    setCurrentHtmlCode(value || "");
  };

  const handleCssChange = (value: string | undefined) => {
    setCurrentCssCode(value || "");
  };

  return (
    <div
      className="shadow--lw"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        overflow: "hidden",
        margin: "1rem 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `var(--ifm-color-primary-lighter)`,
          padding: "0.75rem 1rem",
          fontWeight: 600,
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "1.1em" }}>🎨</span>
        Playground
      </div>

      {/* Content Area */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Editors Panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* HTML Editor */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--ifm-color-emphasis-300)",
              borderRadius: "var(--ifm-border-radius)",
              overflow: "hidden",
              backgroundColor: "var(--ifm-background-color)",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--ifm-color-emphasis-100)",
                padding: "0.5rem 0.75rem",
                borderBottom: "1px solid var(--ifm-color-emphasis-200)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--ifm-color-emphasis-700)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#e34c26",
                  borderRadius: "50%",
                }}
              />
              HTML
            </div>
            <Editor
              height="180px"
              defaultLanguage="html"
              theme={editorTheme}
              value={currentHtmlCode}
              onChange={handleHtmlChange}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 13,
                padding: { top: 8, bottom: 8 },
                lineNumbers: "on",
                renderLineHighlight: "line",
                smoothScrolling: true,
                wordWrap: "off",
              }}
            />
          </div>

          {/* CSS Editor */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--ifm-color-emphasis-300)",
              borderRadius: "var(--ifm-border-radius)",
              overflow: "hidden",
              backgroundColor: "var(--ifm-background-color)",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--ifm-color-emphasis-100)",
                padding: "0.5rem 0.75rem",
                borderBottom: "1px solid var(--ifm-color-emphasis-200)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--ifm-color-emphasis-700)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#1572b6",
                  borderRadius: "50%",
                }}
              />
              CSS
            </div>
            <Editor
              height="180px"
              defaultLanguage="css"
              theme={editorTheme}
              value={currentCssCode}
              onChange={handleCssChange}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 13,
                padding: { top: 8, bottom: 8 },
                lineNumbers: "on",
                renderLineHighlight: "line",
                smoothScrolling: true,
                wordWrap: "off",
              }}
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              border: "1px solid var(--ifm-color-emphasis-300)",
              borderRadius: "var(--ifm-border-radius)",
              overflow: "hidden",
              backgroundColor: "var(--ifm-background-color)",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--ifm-color-emphasis-100)",
                padding: "0.5rem 0.75rem",
                borderBottom: "1px solid var(--ifm-color-emphasis-200)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--ifm-color-emphasis-700)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--ifm-color-primary)",
                  borderRadius: "50%",
                }}
              />
              プレビュー
            </div>
            <iframe
              title="Preview"
              srcDoc={previewContent}
              sandbox=""
              style={{
                flex: 1,
                backgroundColor: "white",
                border: "none",
                minHeight: "380px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
