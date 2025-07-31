import React, { useCallback, useState } from "react";
import Editor from "@monaco-editor/react";
import { useColorMode } from "@docusaurus/theme-common";
import StackBlitzSDK from "@stackblitz/sdk";
import { OpenInStackBlitzButton } from "./open-in-stack-blitz-button";
import dedent from "ts-dedent";

interface SectionProps {
  children?: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
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
      {children}
    </div>
  );
}

interface HeaderProps {
  children?: React.ReactNode;
  color: string;
}

function SectionHeader({ children, color }: HeaderProps) {
  return (
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
          backgroundColor: color,
          borderRadius: "50%",
        }}
      />
      {children}
    </div>
  );
}

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
    return dedent`<!DOCTYPE html>
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

  const generateStackBlitzContent = (html: string) => {
    return dedent`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
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

  const handleOnOpenInStackBlitz = useCallback(() => {
    StackBlitzSDK.openProject(
      {
        files: {
          "index.html": generateStackBlitzContent(currentHtmlCode),
          "style.css": currentCssCode,
          "package.json": dedent`{
            "scripts": {
              "start": "servor --reload"
            },
            "dependencies": {
              "servor": "^4.0.2"
            }
          }`,
        },
        template: "node",
        title: "CSS Dojo",
        description: `This is an example of my first doc!`,
      },
      {
        newWindow: true,
        openFile: ["index.html", "style.css"],
        showSidebar: false,
        terminalHeight: 0,
      }
    );
  }, []);

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
          color: "white",
          background: `var(--ifm-color-primary-lighter)`,
          padding: "0.75rem 1rem",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.1em" }}>🎨</span>
          Playground
        </div>
        <OpenInStackBlitzButton onClick={handleOnOpenInStackBlitz} />
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
            minWidth: "0px",
            flexDirection: "column",
          }}
        >
          {/* HTML Editor */}
          <Section>
            <SectionHeader color="#e34c26">HTML</SectionHeader>
            <Editor
              height="300px"
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
          </Section>

          {/* CSS Editor */}
          <Section>
            <SectionHeader color="#1572b6">CSS</SectionHeader>
            <Editor
              height="300px"
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
          </Section>
        </div>

        {/* Preview Panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: "0px",
          }}
        >
          <Section>
            <SectionHeader color="#1572b6">プレビュー</SectionHeader>
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
          </Section>
        </div>
      </div>
    </div>
  );
}
