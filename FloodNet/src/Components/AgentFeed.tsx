import React from "react";

type Props = {
  logs: string[];
};

const AgentFeed: React.FC<Props> = ({ logs }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Agent Feed</h2>
      <div style={styles.feed}>
        {logs.length === 0 && <p style={styles.empty}>No logs yet</p>}
        {logs.map((log, index) => (
          <div key={index} style={styles.log}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentFeed;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#2EA3F2",
    padding: "12px",
    borderRadius: "8px",
    
  },
  title: {
    color: "#FFFFFF",
    fontSize: "16px",
    marginBottom: "8px",
  },
  feed: {
    maxHeight: "150px",
    overflowY: "auto",
  },
  log: {
    backgroundColor: "#B6DFE9",
    padding: "4px 8px",
    marginBottom: "4px",
    borderRadius: "4px",
    color: "#0C71C3",
    fontSize: "14px",
  },
  empty: {
    color: "#FFFFFF",
    fontStyle: "italic",
  },
};