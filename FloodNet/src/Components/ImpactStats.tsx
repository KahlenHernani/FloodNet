import React from "react";

type Props = {
  peopleHelped: number;
  alertsSent: number;
  zonesActive: number;
};

const ImpactStats: React.FC<Props> = ({ peopleHelped, alertsSent, zonesActive }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Impact Stats</h2>
      <div style={styles.stat}>
        <span>People Assisted:</span>
        <span style={styles.value}>{peopleHelped}</span>
      </div>
      <div style={styles.stat}>
        <span>Alerts Sent:</span>
        <span style={styles.value}>{alertsSent}</span>
      </div>
      <div style={styles.stat}>
        <span>Active Zones:</span>
        <span style={styles.value}>{zonesActive}</span>
      </div>
    </div>
  );
};

export default ImpactStats;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "12px",
    backgroundColor: "#2EA3F2",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "16px",
    marginBottom: "12px",
    textAlign: "center",
    color: "#FFFFFF",
  },
  stat: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    fontSize: "14px",
  },
  icon: {
    marginRight: "8px",
  },
  value: {
    fontWeight: "bold",
  },
};