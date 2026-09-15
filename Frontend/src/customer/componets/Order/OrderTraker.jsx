import { Step, StepLabel, Stepper } from "@mui/material";
import { color } from "../Product/FileData";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Deliver",
];

const OrderTraker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
             {steps.map((lebel) => (
        <Step>
          <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
            {lebel}
          </StepLabel>
        </Step>
      ))}
        
      </Stepper>

 
    </div>
  );
};

export default OrderTraker;
