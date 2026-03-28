import React from "react";
import type { Zone, User, Route } from "../types";

type Props = {
  zones: Zone[];
  users: User[];
  routes: Route[];
};

const MapView: React.FC<Props> = () => {
  return (
    <div style={styles.mapContainer}>
      <div style={styles.map}>
        {/* Placeholder: You can integrate Mapbox or Leaflet here */}
        <p style={styles.placeholder}>Map goes here</p>
      </div>
    </div>
  );
};

export default MapView;

const styles: { [key: string]: React.CSSProperties } = {
  mapContainer: {
    flex: 3,
  },
  title: {
    color: "#0C71C3",
    fontSize: "18px",
    marginBottom: "8px",
  },
  map: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0C71C3",
    fontWeight: "bold",
  },
  placeholder: {
    color: "#2EA3F2",
  },
};