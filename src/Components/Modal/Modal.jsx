import { HiMiniXMark } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import Api from "../../api/Api";
import useFetch from "../../hooks/UseFetch";
function Modal({ onClose }) {
  const { data } = useFetch(Api.products);
  const products = data.products || [];

  const productsData = products.map((p) => {
    return p.category;
  });
  const Categories = [...new Set(productsData)];

  return (
    <div className="bg-black/60 backdrop-blur-sm inset-0 w-full h-full fixed z-10 flex justify-center items-center">
      <div className="bg-surface w-120 h-145 rounded-lg py-5 px-6 flex flex-col justify-between ">
        <div className="flex flex-row justify-between items-center text-text mb-5">
          <button onClick={onClose} className="text-lg cursor-pointer ">
            <HiMiniXMark />
          </button>
          <h2 className="text-lg font-bold">افزودن محصول</h2>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="flex flex-col justify-center gap-3 items-end">
            <h2 className="text-text text-sm">تصویر محصول</h2>
            <label className="bg-background border-dashed border-border border-2 rounded-lg w-50 h-40 flex flex-col justify-center items-center">
              <span className="flex flex-col justify-center items-center gap-3.5">
                <IoImageOutline className="text-4xl text-text" />
                <p className="text-muted text-[10px]">
                  برای آپلود تصویر کلیک کنید
                </p>
                <p className="text-muted text-[10px]">
                  WEBP, JPG, PNG فرمت های مجاز
                </p>
              </span>

              <input
                className="hidden"
                type="file"
                accept="image/jpg ,image/png,image/webp"
              />
            </label>
          </span>
          <span className="flex flex-col justify-between items-center h-43">
            <span className="flex flex-col gap-2.5 justify-center items-end">
              <label htmlFor="name" className="text-xs text-text">
                نام محصول
              </label>
              <input
                className="input-style"
                type="text"
                name=""
                id="name"
                placeholder="مثلا: لپتاپ ایسوس"
              />
            </span>
            <span className="flex flex-col gap-2.5 justify-center items-end">
              <label htmlFor="name" className="text-xs text-text">
                قیمت
              </label>
              <input
                className="input-style"
                type="text"
                name=""
                id="name"
                placeholder="مثلا: ۲.۵۰۰.۰۰۰
"
              />
            </span>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-5 border-b border-border pb-5">
          <span className="flex flex-row justify-between items-center w-full mt-3">
            <span className="flex flex-col justify-center items-end gap-2.5">
              <label className="text-xs text-text" htmlFor="category">
                دسته بندی
              </label>
              <select
                name=""
                className="w-44 bg-background border border-border rounded-lg h-10 px-3 text-xs text-[#74798A] focus:outline-none  "
                id="category"
              >
                <option value=""> انتخاب دسته بندی</option>
                {Categories.map((c) => {
                  return (
                    <option className=" bg-background rounded-lg" value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </span>
            <span className="flex flex-col justify-center items-end gap-2.5">
              <label className="text-xs text-text" htmlFor="stock">
                موجودی
              </label>
              <input
                type="text"
                className="input-style "
                placeholder="مثلا: ۲۵"
              />
            </span>
          </span>
          <span className="flex flex-col justify-center items-end gap-2.5 w-full">
            <label htmlFor="description" className="text-text text-xs">
              توضیحات
            </label>
            <textarea
              className="desc-input"
              id="description"
              placeholder="...توضیحات محصول را وارد کنید "
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
          <button className="bg-primary hover:bg-primary-dark cursor-pointer text-text transition duration-300 text-xs w-25 h-7.5 rounded-md">
            افزودن محصول
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
