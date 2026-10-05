import { HiMiniXMark } from "react-icons/hi2";
import Api from "../../api/Api";
import UploadImage from "../uploadImage/UploadImage";
import useFetch from "../../hooks/UseFetch";
import { useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import Product from "../Products/Product";

function Modal({ onClose }) {
  const { data } = useFetch(Api.products);
  const products = data.products || [];
  const productsData = products.map((p) => {
    return p.category;
  });
  const Categories = [...new Set(productsData)];

  const inputState = {
    name: "",
    price: "",
    stock: "",
    category: "",
    desc: "",
  };
  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  const [state, dispatch] = useReducer(reducer, inputState);

  const handleChange = (e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  };
  const addProduct = () => {
    if (!state.name || !state.price || !state.stock || !state.category) {
      toast.error("!لطفا مقادیر را پر کنید");
      return;
    } else {
    }
    onClose();
    toast.success("محصول با موفقیت اضافه شد");
    console.log(state);
  };
  return (
    <div className="bg-black/60 backdrop-blur-sm inset-0 w-full h-full fixed z-10 flex justify-center items-center">
      <div className="bg-surface w-120 h-145 rounded-lg py-5 px-6 flex flex-col justify-between ">
        <div className="flex flex-row justify-between items-center text-text mb-5">
          <button
            onClick={onClose}
            className="text-lg cursor-pointer  hover:text-danger"
          >
            <HiMiniXMark />
          </button>
          <h2 className="text-lg font-bold">افزودن محصول</h2>
        </div>
        <div className="flex flex-row justify-between items-center">
          {/* آپلود تصویر محصول 👇👇 */}
          <span className="flex flex-col justify-center gap-3 items-end">
            <h2 className="text-text text-sm">تصویر محصول</h2>
            <UploadImage />
          </span>
          <span className="flex flex-col justify-between items-center h-43">
            <span className="flex flex-col gap-2.5 justify-center items-end">
              <label htmlFor="name" className="text-xs text-text">
                <span className="text-danger mr-1.5">*</span>
                نام محصول
              </label>
              <input
                className="input-style"
                type="text"
                name="name"
                value={state.name}
                id="name"
                placeholder="مثلا: لپتاپ ایسوس"
                onChange={handleChange}
              />
            </span>
            <span className="flex flex-col gap-2.5 justify-center items-end">
              <label htmlFor="price" className="text-xs text-text">
                {" "}
                <span className="text-danger mr-1.5">*</span>
                قیمت
              </label>
              <input
                className="input-style"
                type="number"
                min="0"
                name="price"
                value={state.price}
                id="price"
                placeholder="مثلا: ۲.۵۰۰.۰۰۰"
                onChange={handleChange}
              />
            </span>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-5 border-b border-border pb-5">
          <span className="flex flex-row justify-between items-center w-full mt-3">
            <span className="flex flex-col justify-center items-end gap-2.5">
              <label className="text-xs text-text" htmlFor="category">
                {" "}
                <span className="text-danger mr-1.5">*</span>
                دسته بندی
              </label>
              <select
                name="category"
                value={state.category}
                className="w-44 bg-background border border-border rounded-lg h-10 px-3 text-xs text-[#74798A] focus:outline-none  "
                id="category"
                onChange={handleChange}
              >
                <option value=""> انتخاب دسته بندی</option>
                {Categories.map((c) => {
                  return (
                    <option
                      className=" bg-background rounded-lg"
                      key={c}
                      value={c}
                    >
                      {c}
                    </option>
                  );
                })}
              </select>
            </span>
            <span className="flex flex-col justify-center items-end gap-2.5">
              <label className="text-xs text-text" htmlFor="stock">
                {" "}
                <span className="text-danger mr-1.5">*</span>
                موجودی
              </label>
              <input
                type="number"
                min="1"
                className="input-style "
                placeholder="مثلا: ۲۵"
                name="stock"
                value={state.stock}
                onChange={handleChange}
              />
            </span>
          </span>
          <span className="flex flex-col justify-center items-end gap-2.5 w-full">
            <label htmlFor="description" className="text-text text-xs">
              توضیحات
            </label>
            <textarea
              className="desc-input"
              value={state.desc}
              id="description"
              placeholder="...توضیحات محصول را وارد کنید "
              name="desc"
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center mt-3">
          <button
            onClick={onClose}
            className="bg-sidebar  hover:bg-text hover:text-black duration-300 transition text-text text-xs w-25 h-7.5 rounded-md cursor-pointer"
          >
            لغو
          </button>
          <button
            onClick={addProduct}
            className="bg-primary hover:bg-primary-dark cursor-pointer text-text transition duration-300 text-xs w-25 h-7.5 rounded-md"
          >
            افزودن محصول
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
