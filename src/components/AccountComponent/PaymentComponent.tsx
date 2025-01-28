import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.p`
  margin-bottom: 15px;
  font-size: 22px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PaymentComponent = () => {
  const [amount, setAmount] = useState("");
  return (
    <>
      <StyledTitle>
        Topup balance:
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          min={0}
          max={2000}
          placeholder="Amount"
        />
        $
      </StyledTitle>
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
                  amount: { value: amount, currency_code: "USD" },
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
    </>
  );
};
