import { Box, Button, FormErrorMessage } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import GlobalWrapper from "../components/GlobalWrapper";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";

interface Values {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid email"),
  password: Yup.string().required().min(6),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.number(),
});

const Register = () => {
  const [registerMutation] = useRegisterMutation();

  return (
    <GlobalWrapper>
      <Wrapper variant="small">
        <Box mt={"20%"} padding={8} borderRadius={"8px"}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              registerMutation({
                variables: {
                  options: {
                    ...values,
                    phoneNumber: parseInt(values.phoneNumber),
                  },
                },
                onError: (err) => {
                  console.log(err);
                  actions.setErrors({
                    email: "email errored",
                    password: "password errored",
                  });
                  actions.setSubmitting(false);
                },
                onCompleted: (data) => {
                  actions.setSubmitting(false);
                },
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormErrorMessage>{}</FormErrorMessage>
                <InputField
                  name="firstName"
                  label="First Name"
                  placeholder="agc@gmail.com"
                  autoComplete="off"
                  required
                />
                <Box mt={"6"}>
                  <InputField
                    name="lastName"
                    label="Last Name"
                    autoComplete="off"
                    required
                  />
                </Box>

                <Box mt={"6"}>
                  <InputField
                    name="email"
                    label="Email"
                    autoComplete="off"
                    required
                  />
                </Box>

                <Box mt={"6"}>
                  <InputField
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                  />
                </Box>

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
    </GlobalWrapper>
  );
};
export default Register;
