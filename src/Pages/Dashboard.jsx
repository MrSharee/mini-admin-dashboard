import StatCard from "../Components/Dashboard/StatCard";
import SalesChart from "../Components/Dashboard/SalesChart";
import RecentOrders from "../Components/Dashboard/RecentOrders";
import { PiUsersThreeThin } from "react-icons/pi";
import { BsBoxSeam, BsCart2 } from "react-icons/bs";
import useFetch from "../hooks/UseFetch";
import Api from "../api/Api";
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default ?? CountUpModule;

function Dashboard() {
  const users = useFetch(Api.users);
  const carts = useFetch(Api.carts);
  const totalSales =
    carts.data?.carts?.reduce((sum, cart) => sum + cart.totalQuantity, 0) ?? 0;

  return (
    <>
      <div className="flex flex-col justify-between bg-background h-full w-5/6  p-7 gap-9">
        <span
          className="flex flex-col justify-center items-end
          gap-2.5"
        >
          <h2 className="text-text text-2xl">خوش آمدید، هادی شرعی 👋</h2>
          <p className="text-xs text-muted">
            . به داشبورد مدیریت خوش آمدید❤️ ، در اینجا می‌توانید وضعیت کلی سیستم
            را مشاهده کنید
          </p>
        </span>
        <div className="flex flex-row justify-between items-center text-white ">
          <StatCard
            title="کاربران"
            value={
              <CountUp
                end={users.data?.total ?? 0}
                duration={3}
                formattingFn={(n) => n.toLocaleString("fa-IR")}
              />
            }
            percent="+۲.۵٪"
            icon={<PiUsersThreeThin className="text-2xl text-primary" />}
          />
          <StatCard
            title="فروش"
            value={
              <CountUp
                end={totalSales}
                duration={3}
                formattingFn={(n) => n.toLocaleString("fa-IR")}
              />
            }
            percent="+۵.۰٪"
            icon={<BsBoxSeam className="text-2xl text-primary" />}
          />
          <StatCard
            title="سفارشات"
            value={
              <CountUp
                end={carts.data?.carts?.length ?? 0}
                duration={3}
                formattingFn={(n) => n.toLocaleString("fa-IR")}
              />
            }
            percent="+۱.۵٪"
            icon={<BsCart2 className="text-2xl text-primary pb-5 px-5 " />}
          />
        </div>
        <div className=" flex flex-row justify-between gap-7">
          <SalesChart />
          <RecentOrders />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
