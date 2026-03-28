import React from "react";

type Props = {
  addLog: (msg: string) => void;
};

const ActionPanel: React.FC<Props> = ({ addLog }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Actions</h2>
      <button style={styles.button} onClick={() => addLog("Simulating storm...")}>
        Simulate Storm
      </button>
      <button style={styles.button} onClick={() => addLog("Evacuation triggered")}>
        Trigger Evacuation
      </button>
    </div>
  );
};

export default ActionPanel;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#2EA3F2",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "16px",
    marginBottom: "8px",
  },
  button: {
    backgroundColor: "#B6DFE9",
    color: "#0C71C3",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};