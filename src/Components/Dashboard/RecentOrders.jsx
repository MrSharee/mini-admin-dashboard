import { FaListUl } from "react-icons/fa";
import Orders from "../Orders";
import Api from "../../api/Api";
import useFetch from "../../hooks/UseFetch";
import formatNum from "../../utils/formatNum";

function RecentOrders() {
  const { data } = useFetch(Api.carts);
  const carts = data.carts || [];

  const cartsData = carts.map((cart) => {
    console.log(cart.products[0].thumbnail);
    console.log(cart.products[0].title);
    console.log(cart.discountedTotal);
    console.log(cart.id);
  });
  return (
    <div className="rounded-lg bg-surface px-7  py-6 flex flex-col justify-start  gap-5 w-2/5">
      <span className="flex flex-row justify-end gap-1.5 items-center">
        <h1 className="text-muted text-base">آخرین سفارشات</h1>
        <FaListUl className="text-primary" />
      </span>
      <Orders />
    </div>
  );
}

export default RecentOrders;
