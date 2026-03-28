import React from "react";
import AgentFeed from "./AgentFeed";
import ActionPanel from "./ActionPanel";
import ImpactStats from "./ImpactStats";

type Props = {
  logs: string[];
  addLog: (msg: string) => void;
  peopleHelped: number;
  alertsSent: number;
  zonesActive: number;
};

const Sidebar: React.FC<Props> = ({
  logs,
  addLog,
  peopleHelped,
  alertsSent,
  zonesActive,
}) => {
  return (
    <div style={styles.sidebar}>
      <AgentFeed logs={logs} />
      <ActionPanel addLog={addLog} />
      <ImpactStats
        peopleHelped={peopleHelped}
        alertsSent={alertsSent}
        zonesActive={zonesActive}
      />
    </div>
  );
};

export default Sidebar;

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    flex: 1,
    padding: "16px",
    backgroundColor: "#0C71C3",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
};