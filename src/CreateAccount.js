import React from 'react';
import { Formik, Form, Field } from "formik";
import { Card } from './Context'
import { UserContext } from './Context';
import * as Yup from "yup";


const CreateAccount = () => {
    
    const [show, setShow] = React.useState(true);
   
    const ctx = React.useContext(UserContext);

    const CreateAccountSchema = Yup.object().shape({
      username: Yup.string()
        .min(2, "Too short")
        .max(20, "Too long")
        .required("Required"),
      email: Yup.string().email("Please enter a valid email").required("Required"),
      password: Yup.string().min(6, "Your password is too short").required("Required"),
    });
  
    return (
      <div className="container">
      <Card
        className="mx-auto"
        header="Create Account"
        txtcolor="black"
        body={
          show ? (
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={CreateAccountSchema}
              onSubmit={(values, { resetForm }) => {
                setShow(false);
  
                ctx.users.push({
                  name: values.username,
                  email: values.email,
                  password: values.password,
                  balance: 100,
                });
  
                resetForm();
                console.log("Saved");
              }}
            >
              {({ errors, touched, isValid, dirty }) => (
                <Form>
                  Name
                  <br />
                  <Field
                    className="form-control"
                    name="username"
                    placeholder="Enter name"
                    autoComplete="new-username"
                  />
                  {errors.username && touched.username ? (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "x-small",
                      }}
                    >
                      {errors.username}
                    </div>
                  ) : null}
                  <br />
                  Email address
                  <br />
                  <Field
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    autoComplete="new-username"
                  />
                  {errors.email && touched.email ? (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "x-small",
                      }}
                    >
                      {errors.email}
                    </div>
                  ) : null}
                  <br />
                  Password
                  <br />
                  <Field
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    autoComplete="new-password"
                  />
                  {errors.password && touched.password ? (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "x-small",
                      }}
                    >
                      {errors.password}
                    </div>
                  ) : null}
                  <br />
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100"
                    disabled={!(isValid && dirty)}
                  >
                    Submit
                  </button>
                  <button
                  type="reset"
                  className="btn btn-outline-primary mt-1 w-100"
                >
                  Clear
                </button>
                </Form>
              )}
            </Formik>
          ) : (
            <>
              <h5>Acount successfully created!</h5>
              <button
                type="submit"
                className="btn btn-outline-primary mr-1"
                onClick={() => {
                  setShow(true);
                }}
              >
                Add another account
              </button>
            </>
          )
        }
      />
      </div>
    );
      }

export default CreateAccount