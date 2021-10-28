import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Editor() {
  const [content, setContent] = useState("");

  function keyPress(e) {
    let value = content,
      selStartPos = e.currentTarget.selectionStart;

    // indent on tab
    if (e.key === "Tab") {
      e.preventDefault();
      value =
        value.substring(0, selStartPos) +
        "    " +
        value.substring(selStartPos, value.length);
      e.currentTarget.selectionStart = selStartPos + 3;
      e.currentTarget.selectionEnd = selStartPos + 4;

      setContent(value);
    }
  }

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div className="code-edit-container">
      <textarea
        className="input"
        onChange={e => setContent(e.target.value)}
        onKeyDown={keyPress}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      <pre className="output">
        <code className="language-javascript code">{content}</code>
      </pre>
    </div>
  );
}
