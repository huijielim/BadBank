import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card, UserContext } from "./Context";


function Withdraw() {

  const ctx = React.useContext(UserContext);
 
  const WithdrawSchema = Yup.object().shape(
    {
      withdrawAmount: Yup
        .number('Please enter a number')
        .min(1)
        .required("Required")
        .positive()
        .integer()
  }
  
  );

  const [balanceUpdate, setBalanceUpdate] = useState(100);
  const [showError, setShowError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
      header="Withdraw"
      txtcolor="black"
      body={
        <Formik
          initialValues={
            {
            userPosition: "",
            withdrawAmount: {balanceUpdate},
            }
        }
        validationSchema={WithdrawSchema}
        onSubmit={values => {

          if(values.withdrawAmount > ctx.users[values.userPosition].balance ) {
            setShowError(true)
            setShowSuccessMessage(false)
            
          } else {
            ctx.users[values.userPosition].balance -= values.withdrawAmount

            setBalanceUpdate(ctx.users[values.userPosition].balance) 
            setShowSuccessMessage(true)
            setShowError(false)
            
          }

          }}

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
              {
              errors.userPosition && touched.userPosition ? (
                <div

                  style={
                    {
                      color: 'crimson',
                      fontWeight: "bold",
                      marginTop: 6,
                      marginBottom: 10,
                      fontSize: "small",
                    }
                  }
                  >
                    {errors.userPosition}
                  </div>
                ) : null

              }
              <br />

              Amount
              <br />

              <Field
                className="form-control"
                name="withdrawAmount"
                placeholder="Withdraw Amount"
                type="number"
                default="0"
                min="0"
              />
              <br />
              <button
                type="submit"
                className="btn btn-outline-primary mr-1 w-100"
                disabled={!(isValid && dirty)}
              >
                Submit
              </button>
              <br />
              {showError ? (
                  <div
                style={{
                    color: 'red',
                    backgroundColor: 'pink',
                    textAlign: "center",
                    borderRadius: 5,
                    fontWeight: 'bold',
                    fontSize: 'x-small',
                    padding: 10,
                    marginTop: 10,
                }}
              >
                  Insufficient funds
                  </div>
              ) : null } 
              {showSuccessMessage ? (
                  <div
                style={{
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
                  Withdraw Successful
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

export default Withdraw
