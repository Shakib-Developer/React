import { useState } from "react";

const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#ffffff",
  expanded = false,
  className,
  children,
}) => {
  const [opened, setOpened] = useState(expanded);

  const displayText = opened
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + " " + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    marginTop: "10px",
    marginBottom: "10px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <h3>{displayText}</h3>
      <button onClick={() => setOpened((exp) => !exp)} style={buttonStyle}>
        {opened ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
