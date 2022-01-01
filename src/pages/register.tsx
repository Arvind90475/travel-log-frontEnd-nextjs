import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

interface Values {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required").min(6),
});

const Register = () => {
  return (
    <Wrapper variant="small">
      <Box mt={"50%"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="email"
                label="Email"
                placeholder="agc@gmail.com"
                required
              />

              <Box mt={"6"}>
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  required
                />
              </Box>
              <Button
                my={"4"}
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  );
};
export default Register;
