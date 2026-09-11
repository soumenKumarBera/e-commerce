import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://www.ethnicplus.in/cdn/shop/files/61621_2_5b16c71f-8187-4b40-81af-e682828243d2.jpg?v=1781910904&width=300"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold ">Men Slim mid rid black jans</p>
          <p className="opacity-70">Size: L, white</p>
          <p className="opacity-70 mt-2">Seller: Crishtaly 2fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-6">
            <p className="font-semibold ">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-500 font-semibold">5% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
          <span className="py-1 px-7 border border-gray-300 rounded-sm">
            5
          </span>
          <IconButton sx={{color:"RGB(145 85 253)"}}>
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
        </div>

        <div>
          <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
