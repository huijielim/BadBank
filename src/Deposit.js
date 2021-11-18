import React, { useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Card, UserContext } from "./Context";


function Deposit() {
  
  const ctx = React.useContext(UserContext);

  const DepositSchema = Yup.object().shape(
    {
    depositAmount: Yup
      .number()
      .required("Please enter an amount")
      .positive()
      .integer()
    }
  
  );
  
  const [ balanceUpdate, setBalanceUpdate] = useState(null);
  const [ showSuccessMessage, setShowSuccesMessage] = useState(false);

  const users = ctx.users.map((user, idx) => {
    return (
      <option key={idx} value={idx}>
        {user.name}
      </option>
    );
  });

  return (
    <div className="container">
    <Card
      className="mx-auto"
      header="Deposit"
      txtcolor="black"
      body={
        <Formik
          initialValues={{
            userPosition: "",
            depositAmount: {balanceUpdate},
          }}
          validationSchema={DepositSchema}
          onSubmit={(values) => {
            ctx.users[values.userPosition].balance += values.depositAmount;
            setBalanceUpdate(ctx.users[values.userPosition].balance);
            setShowSuccesMessage(true);
          }}
          validateOnChange={(values) =>
            setBalanceUpdate(ctx.users[values.userPosition].balance)
          }
        >
          {({ errors, touched, isValid, dirty, values }) => (
            <Form>
              Account Balance:{" "}
              {values.userPosition === ""
                ? "$0"
                : "$" + ctx.users[values.userPosition].balance}
              <br />
              <Field as="select" name="userPosition" className="form-control">
                <option key="selectUser" value="" disabled>
                  Select User
                </option>
                {users}
              </Field>
              {errors.userPosition && touched.userPosition ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "x-small",
                  }}
                >
                  {errors.userPosition}
                </div>
              ) : null}
              <br />
              Amount
              <br />
              <Field
                className="form-control"
                name="depositAmount"
                placeholder="Deposit Amount"
                type="number"
                default="0"
                min="0"
              />
              {errors.depositAmount && touched.depositAmount ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginTop: 6,
                    marginBottom: 10,
                    fontSize: "small",
                  }}
                >
                  {errors.depositAmount}
                </div>
              ) : null}
              <br />
              <button
                type="submit"
                className="btn btn-outline-primary mr-1 w-100"
                disabled={!(isValid && dirty)}
              >
                Submit
              </button>
              {showSuccessMessage ? (
                <div style={{
                  color: 'green',
                  backgroundColor: 'LightGreen',
                  textAlign: "center",
                  borderRadius: 5,
                  fontWeight: 'bold',
                  fontSize: 'x-small',
                  padding: 10,
                  marginTop: 10,
              }}
            >
               Deposit Sucessful

                </div>
  
              ) : null}
            </Form>
          )}
        </Formik>
      }
    />
    </div>
  );
}

export default Deposit
