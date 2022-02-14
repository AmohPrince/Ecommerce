import React, { useState, useEffect } from "react";
import {
  Paper,
  Step,
  Stepper,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";

import { commerce } from "../../../lib/commerce";

import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link, useHistory } from "react-router-dom";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setactiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [shippingData, setshippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const generateToken = async () => {
      // try {
      //   const token = commerce.checkout.generateToken(cart.id, {
      //     type: "cart",
      //     setCheckoutToken(token)
      //   });
      // } catch (error) {
      //   history.pushState("/")
      // }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => {
    setactiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const backStep = () => {
    setactiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const next = (data) => {
    setshippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      isFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank You For Your Purchase {order.customer.firstname}{" "}
            {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref : {order.customer.reference}
          </Typography>
          <br />
          <Button Component={Link} to="/" variant="outlined" type="button">
            Back To Home
          </Button>
        </div>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank You For Your Purchase </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ref :</Typography>
          <br />
          <Button Component={Link} to="/" variant="outlined" type="button">
            Back To Home
          </Button>
        </div>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5"> Error: {error}</Typography>
      <Button Component={Link} to="/" variant="outlined" type="button">
        Back To Home
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
