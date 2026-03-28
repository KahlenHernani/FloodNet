import "./App.css";
import { useState } from "react";
import type { Zone, User, Route, Log } from "./types";
import MapView from "./Components/MapView";
import SideBar from "./Components/SideBar";

function App() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [peopleHelped, setPeopleHelped] = useState<number>(0);
  const [alertsSent, setAlertsSent] = useState<number>(0);
  const [zonesActive, setZonesActive] = useState<number>(0);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, message]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Map */}
      <MapView zones={zones} users={users} routes={routes} />

      {/* Sidebar */}
      <SideBar logs={logs} addLog={addLog} peopleHelped={peopleHelped} alertsSent={alertsSent} zonesActive={zonesActive} />
    </div>
  );
}

export default App;