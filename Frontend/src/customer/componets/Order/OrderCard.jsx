import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <div className="p-5 shadow-md shadow-black  hover:shadow-2xl border border-gray-200 ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://www.ethnicplus.in/cdn/shop/files/61516_5.jpg?v=1780890201&width=400"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p className="">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p dlassName="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 2 }}>
          <p>₹1099</p>
        </Grid>

        <Grid size={{ xs: 4 }}>
          {true && (
            <div>
              <p className="flex items-center">
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered On March 03</span>
              </p>

              <p className='text-xs'> Your Item Has Been Delivered</p>
            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
