
import style from "./ProductCard.module.css";

const ProductCard = () => {
  return (
   <div className={`${style.productcard} w-[15rem] m-3 transition-all cursor-pointer`}>
      <div className="h-[20rem]">
        <img
          className="h-full  object-cover object-left-top"
          src="https://www.ethnicplus.in/cdn/shop/files/6032-wine_1_6b20525c-2ffd-45da-9526-436ca04edd43.jpg?v=1781662402&width=500"
          alt="Product"
        />
      </div>

      <div className={`${style.textPart} bg-white p-3`}>
        <div>
          <p className="font-bold opacity-60">Sequins Work</p>
          <p>Outstanding Wine Sequins Net Party Wear Plus Size Lehenga Choli</p>
        </div>
        <div className="flex items-center space-x-2 ">
          <p className="font-semibold ">399</p>
          <p className="line-through opacity-50"> 399</p>
          <p className="text-green-600 font-semibold">70% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
