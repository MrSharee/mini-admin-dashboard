import { NavLink } from "react-router";
import { Home, Package, ShoppingCart, ChartNoAxesColumn,Users  } from "lucide-react";


function Sidebar() {
  return (
    <>
      <aside className="bg-sidebar fixed right-0 top-0 h-screen w-1/6 flex flex-col items-center justify-start py-11 border-l-2 border-border  gap-20">
        <span className="text-primary-light font-extrabold text-xl flex flex-row items-center justify-center gap-1.5">
          <h1 className="  ">پروژه داشبورد ادمین</h1>
          <Package />
        </span>

        <ul className="text-text text-sm flex flex-col justify-center items-center  h-1/5 w-full px-4 gap-3.5 ">
          <li className="transition hover:bg-primary-dark flex flex-row items-center justify-end gap-4  w-full py-2 pr-4 rounded-xl">
            <NavLink to="/">خانه</NavLink>
            <Home />
          </li>
          <li className="transition hover:bg-primary-dark flex flex-row items-center justify-end gap-4  w-full py-2 pr-4 rounded-xl">
            <NavLink to="/products">محصولات</NavLink>
            <ChartNoAxesColumn />
          </li>
          <li className="transition hover:bg-primary-dark flex flex-row items-center justify-end gap-4  w-full py-2 pr-4 rounded-xl">
            <NavLink to="/orders">سفارشات</NavLink>
            <ShoppingCart />
          </li>
          <li className="transition hover:bg-primary-dark flex flex-row items-center justify-end gap-4  w-full py-2 pr-4 rounded-xl">
            <NavLink to="/users">کاربران</NavLink>
            <Users />
          </li>
        </ul>
        <br />
      </aside>
    </>
  );
}

export default Sidebar;
