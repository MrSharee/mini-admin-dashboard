import { FaListUl } from "react-icons/fa";
import Orders from "../OrdersComp";
import Api from "../../api/Api";
import useFetch from "../../hooks/UseFetch";
import formatNum from "../../utils/formatNum";

function RecentOrders() {
  const { data } = useFetch(Api.carts);
  const carts = data.carts || [];
  const cartsData = carts.slice(-6).map((cart) => {
    return cart.products[1];
  });

  return (
    <div className="rounded-lg bg-surface px-7  py-6 flex flex-col justify-start  gap-5 w-2/5">
      <span className="flex flex-row justify-end gap-1.5 items-center">
        <h1 className="text-muted text-base">آخرین محصولات</h1>
        <FaListUl className="text-primary" />
      </span>

      <div className="flex flex-col justify-start items-center w-full h-full border-t border-border ">
        {cartsData.map((product) => (
          <Orders
            key={product.id}
            title={product.title}
            date={formatNum(product.total)}
            status={formatNum(product.discountPercentage)}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentOrders;
