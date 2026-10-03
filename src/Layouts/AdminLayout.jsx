import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
function AdminLayout() {
  return (
    <>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
