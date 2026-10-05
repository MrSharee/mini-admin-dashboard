import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Api from "../api/Api";
import useFetch from "../hooks/UseFetch";
import usePagination from "../hooks/UsePagination";
import Product from "../Components/Products/Product";
import PageNum from "../Components/PageNum";
import Modal from "../Components/Modal/Modal";
import { useState } from "react";
function Products() {
  const [modal, setModal] = useState(false);
  // const [products, setProducts] = useState([]); از تبدیل  api به useState
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const { data } = useFetch(Api.products);
  const products = data.products || [];
  const { currentItems, currentPage, totalPages, setPage } = usePagination(
    products,
    7,
  );

  return (
    <>
      <div className="flex flex-col justify-start bg-background h-full w-5/6 z-0  p-7 gap-9">
        <span
          className="flex flex-row justify-between items-center
        "
        >
          <button
            onClick={openModal}
            className=" flex flex-row bg-primary justify-center items-center text-text text-xs gap-2 px-3.5 rounded-md py-2.5 hover:bg-primary-dark transition cursor-pointer duration-300"
          >
            <h5>افزودن محصول </h5>
            <FaPlus className="" />
          </button>
          <span className="flex flex-col justify-center gap-1 items-end text-end">
            <h2 className="text-text text-2xl ">محصولات</h2>
            <p className="text-xs text-muted">
              مدیریت و مشاهده محصولات فروشگاه
            </p>
          </span>
        </span>
        <div className="">
          <div className=" text-muted text-xs text-center grid grid-cols-[1fr_2fr_1fr_1fr_1fr_0.8fr] border border-border bg-surface h-12 rounded-t-lg items-center ">
            <p>عملیات</p>
            <p>دسته بندی</p>
            <p>وضعیت</p>
            <p>قیمت</p>
            <p>نام محصول</p>
            <p>تصویر</p>
          </div>
          {currentItems.map((data) => (
            <Product
              key={data.id}
              title={data.title}
              image={data.thumbnail}
              price={data.price}
              status={
                data.stock >= 50 ? "کافی" : data.stock >= 20 ? "متوسط " : "کم"
              }
              category={data.category}
              statusClass={
                data.stock >= 50
                  ? "bg-green-500/15 border-yellow-500/30 text-green-400 border  rounded-lg w-14 text-xs  py-1  "
                  : data.stock >= 20
                    ? "bg-yellow-500/15 border-yellow-500/30 text-yellow-400 border  rounded-lg w-14 text-xs  py-1 "
                    : "bg-red-500/15 border-red-500/30 text-red-400  border  rounded-lg w-14 text-xs  py-1  "
              }
            />
          ))}
        </div>
        <PageNum
          totalPages={totalPages}
          currentPage={currentPage}
          setPage={setPage}
        />
      </div>
      {modal && <Modal onClose={closeModal} />}
      {/* <Modal /> */}
    </>
  );
}

export default Products;
