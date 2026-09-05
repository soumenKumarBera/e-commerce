
import style from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
   <div className={`${style.productcard} w-[15rem] m-3 transition-all cursor-pointer`}>
      <div className="h-[20rem]">
        <img
          className="h-full  object-cover object-left-top"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>

      <div className={`${style.textPart} bg-white p-3`}>
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2 ">
          <p className="font-semibold ">{product.discountedPrice}</p>
          <p className="line-through opacity-50"> {product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPercent}% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
