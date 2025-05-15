import RecentEmployerList from "../../components/dashboard/RecentEmployerList";
import StatsSection from "../../components/dashboard/StatsSection";
import BookingOverviewChart from "../../components/summary/BookingOverviewChart";
import UserGrowthChart from "../../components/summary/UserGrowthChart";


const DashboardPage = () => {
  return (
    <>
      <div>
        <StatsSection/>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <UserGrowthChart/>
          <BookingOverviewChart/>
        </div>
         <div className="mt-4">
          <RecentEmployerList/>
         </div>
      </div>
    </>
  );
}

export default DashboardPage