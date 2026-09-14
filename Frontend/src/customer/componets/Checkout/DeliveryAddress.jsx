import Grid from "@mui/material/Grid";
import AdressCard from "../AddressCard/AdressCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const DeliveryAddress = () => {

const handelSubmit = (e) =>{
  e.preventDefault();
  console.log(e)
  const data = new FormData(e.currentTarget);

  const address = {
    firstName: data.get("firstName"),
    lastName:data.get("lastName"),
    streetAddress:data.get("address"),
    city:data.get("city"),
    state:data.get("state"),
    zipCode:data.get("zip"),
    mobile:data.get("phoneNumber"),

  }


  console.log("address", address);



}

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          size={{ xs: 12, lg: 5 }}
          className="  border border-gray-200 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AdressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 2553)" }}
              variant="contained"
              size="large"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item size={{ xs: 12, lg: 7 }}>
          <Box className=" border  border-gray-200 rounded-s-md shadow-md p-5">
            <form onSubmit={handelSubmit} >
              <Grid container spacing={3}>
                <Grid item size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item size={{ xs: 12, lg: 6 }}>
                  <Button
                    sx={{py:1, mt: 2, bgcolor: "RGB(145 85 2553)" }}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
