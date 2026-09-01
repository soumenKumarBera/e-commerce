import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Grid
        className=" text-center   mt-10 flex justify-around"
        
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>

          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            {" "}
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>

          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>

          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            {" "}
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>

          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>

          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Api Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Claims
            </Button>
          </div>

          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button lassName="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>

     
      </Grid>
         <Grid className="pt-15 pb-5">
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from
            <Link 
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
    </div>
  );
};

export default Footer;
