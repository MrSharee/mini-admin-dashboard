function Orders(title, date, status, image) {
  return (
    <div className="flex flex-col justify-between w-full border-t border-border">
      <div className="flex flex-row-reverse justify-between items-center border-b border-border py-1">
        <img
          className="w-14"
          src="https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp"
          alt=""
        />
        <span>
          <h2 className="text-text text-sm">title</h2>
          <h3 className="text-muted text-xs">date</h3>
        </span>
        <h2 className="text-success text-sm">status</h2>
      </div>
    </div>
  );
}

export default Orders;
// function Orders(title, date, status, image) {
//   return (
//     <div className="flex flex-col justify-between w-full border-t border-border">
//       <div className="flex flex-row-reverse justify-between items-center border-b border-border py-1">
//         <img className="w-14" src={image} alt="" />
//         <span>
//           <h2 className="text-text text-sm">{title}</h2>
//           <h3 className="text-muted text-xs">{date}</h3>
//         </span>
//         <h2 className="text-success text-sm">{status}</h2>
//       </div>
//     </div>
//   );
// }

// export default Orders;
