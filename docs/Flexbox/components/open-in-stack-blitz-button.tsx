import { ComponentProps } from "react";

export function OpenInStackBlitzButton(props: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className="button button--secondary"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
      }}
      {...props}
    >
      Open in{" "}
      <img
        src="https://developer.stackblitz.com/img/logo/stackblitz-logo-black_blue.svg"
        alt="StackBlitz"
        width="117px"
        height="24px"
      />
    </button>
  );
}
