import { Button } from "@mui/material";
import AdressCard from "../AddressCard/AdressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border border-gray-200">
        <AdressCard />
      </div>

      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border border-gray-100">
            <p className="uppercase font-bold opacity-60 pb-4">Price detais</p>
            <hr />
            <div className="space-y-3 font-semibold ">
              <div className="flex justify-between pt-2 text-black ">
                <span>Price</span>
                <span>₹499</span>
              </div>
              <div className=" flex justify-between pt-2 ">
                <span>Disccount</span>
                <span className=" text-green-600">-₹4954</span>
              </div>
              <div className="flex justify-between pt-2 ">
                <span>Delivery Charge</span>
                <span className=" text-green-600">free</span>
              </div>
              <div className="flex justify-between pt-2  font-bold">
                <span>Total Amount</span>
                <span className=" text-green-600">₹1278</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", mt: 3 }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
