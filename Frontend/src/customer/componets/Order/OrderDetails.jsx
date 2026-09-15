import { Box, Grid } from "@mui/material";
import AdressCard from "../AddressCard/AdressCard";
import OrderTraker from "./OrderTraker";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OderDetails = () => {
  return (
    <div className="px-5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard />
      </div>

      <div className="py-10">
        <OrderTraker activeStep={3} />
      </div>

      <Grid className="space-x-5" container>
        {[1,1,1,1,1].map((item)=> <Grid
          container
          className="shadow-xl rounded-md p-5 borde border-gray-200"
          size={12}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid size={{ xs: 6 }}>
            <div className=" flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://www.ethnicplus.in/cdn/shop/files/61516_5.jpg?v=1780890201&width=400"
                alt=""
              />

              <div className="space-y-2 ml-5">
                <p>Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5">
                  {" "}
                  <span className="space-x-5 opacity-50 text-xs font-semibold ">
                    Color: pink
                  </span>{" "}
                  <span>Size: M</span>
                </p>
                <p>Seller: linaria</p>
                <p>₹1099</p>
              </div>
            </div>
          </Grid>

          <Grid>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon
                sx={{ fontSize: "4rem" }}
                className="px-2 text-5x1"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OderDetails;
