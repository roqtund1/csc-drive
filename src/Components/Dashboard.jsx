import "../styles/Dashboard.css";
import Data from "./Data";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Sidebar />
      <Data />
      
    </div>
  );
}
