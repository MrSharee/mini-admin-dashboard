import formatNum from "../../utils/formatNum";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
function Product({ image, title, price, status, category, statusClass }) {
  return (
    <div className=" text-muted text-xs text-center grid grid-cols-[1fr_2fr_1fr_1fr_1fr_0.8fr] border-x border-b border-border  h-14  items-center ">
      <div className="flex flex-row justify-center gap-4 items-center">
        <span className="p-2.5 bg-surface rounded-lg flex justify-center items-center cursor-pointer text-text group">
          <FiEdit3 className=" text-xs group-hover:text-sm transition-all duration-300 " />
        </span>
        <span className="p-2.5 bg-surface rounded-lg flex justify-center items-center cursor-pointer text-danger group">
          <FiTrash2 className="  text-xs group-hover:text-sm transition-all duration-300" />
        </span>
      </div>
      <p>{category}</p>
      <div className="flex justify-center items-center">
        <p className={statusClass}>{status}</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        <p>تومان</p>
        <span className="text-text">{formatNum(price)}</span>
      </div>
      <p>{title}</p>
      <div className="flex justify-center items-center">
        <img className="w-14 self-center" src={image} alt="" />
      </div>
    </div>
  );
}

export default Product;

// bg-green-500/15 border-yellow-500/30 text-green-400 border  rounded-lg w-14 text-xs  py-1            succes
// bg-yellow-500/15 border-yellow-500/30 text-yellow-400 border  rounded-lg w-14 text-xs  py-1             warn
// bg-red-500/15 border-red-500/30 text-red-400  border  rounded-lg w-14 text-xs  py-1                   danger
