import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaymentComponent = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AU065B89V_gjWfXk73MdNoGXpVQeVgrV56JJFA0mDEwc78awvibd6xODCxUc5wbfC-UjaKhadhxUvG_n",
        intent: "capture",
        currency: "USD",
      }}
    >
      <PayPalButtons
        createOrder={(_data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: "10", currency_code: "USD" },
              },
            ],
            intent: "CAPTURE",
          });
        }}
        onApprove={async (_data, actions) => {
          return actions?.order?.capture().then((details) => {
            alert(
              `Transaction completed by ${details?.payer?.name?.given_name}`
            );
          });
        }}
      />
    </PayPalScriptProvider>
  );
};
