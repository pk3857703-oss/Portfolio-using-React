import React from "react";

/**
 * Catches any render/runtime error anywhere below it in the tree and
 * shows the real error message instead of a blank white page. Uses
 * plain inline styles on purpose (not Tailwind classes) — if the crash
 * is CSS/build related, this fallback still has to render correctly
 * on its own.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // Still visible in the browser console for full stack + component trace.
    console.error("Portfolio crashed:", error, info);
  }

  render() {
    if (this.state.error) {
      const message = this.state.error?.message || String(this.state.error);
      const stack = this.state.error?.stack || "";
      return (
        <div style={{ minHeight: "100vh", background: "#0f1418", color: "#f0f2f5", fontFamily: "monospace", padding: "32px", lineHeight: 1.6 }}>
          <h1 style={{ color: "#f5a623", fontSize: "20px", marginBottom: "12px" }}>
            The page crashed while rendering.
          </h1>
          <p style={{ color: "#7a8491", marginBottom: "16px", maxWidth: "640px" }}>
            This box exists so you see the real error instead of a blank screen.
            Copy the text below back to Claude, or open your browser console (F12) for the same message.
          </p>
          <p style={{ color: "#f0f2f5", marginBottom: "8px", fontWeight: "bold" }}>{message}</p>
          <pre style={{ background: "#141a1f", border: "1px solid #242b32", borderRadius: "8px", padding: "16px", whiteSpace: "pre-wrap", wordBreak: "break-word", color: "#fb7185", fontSize: "12px", maxWidth: "900px", overflowX: "auto" }}>
            {stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: "20px", background: "#20b2a6", color: "white", border: "none", borderRadius: "999px", padding: "10px 20px", cursor: "pointer", fontFamily: "inherit" }}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
