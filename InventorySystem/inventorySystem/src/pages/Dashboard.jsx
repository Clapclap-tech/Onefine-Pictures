import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SummarySection from "../components/dashboard/SummarySection";
import EquipmentTable from "../components/dashboard/EquipmentTable";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import Reservations from "../components/dashboard/Reservations";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="p-8 space-y-8 overflow-y-auto">
          <SummarySection />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <EquipmentTable />
            </div>

            <div className="space-y-8">
              <ActivityFeed />
              <Reservations />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;