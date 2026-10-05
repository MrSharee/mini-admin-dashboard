function Orders({ title, date, status, image }) {
  return (
    <div className="flex flex-col justify-between w-full  ">
      <div className="flex flex-row-reverse justify-between items-center border-b border-border py-2 ">
        <img className="w-14" src={image} alt="" />
        <span className="flex flex-col justify-center text-end items-end w-1/3">
          <h2 className="text-text text-xs ">{title}</h2>
          <h3 className="text-muted text-xs">{date}</h3>
        </span>
        <h2 className="text-success text-sm">{status}</h2>
      </div>
    </div>
  );
}

export default Orders;
