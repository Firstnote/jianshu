import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  useToast,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineWechat,
  AiOutlineQq,
} from "react-icons/ai";
import CustomText from "./CustomText";
import { signUp } from "../services";
import CustomCss from "./CustomCss";

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("无效的邮箱地址").required("Required"),
  password: Yup.string().min(8, "密码长度不小于8").required("Required"),
});

function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={SignUpSchema}
      onSubmit={async (values) => {
        setIsSubmitting(true);

        try {
          await signUp(values);
          toast({
            position: "top",
            title: "Sign up success.",
            status: "success",
            duration: 3000,
          });
        } catch (err) {
          let errors = err.response.data.errors;
          let message = "";
          for (const iterator in errors) {
            message += `${iterator}:${errors[iterator]};\n`;
          }
          toast({
            position: "top",
            title: message,
            status: "error",
            duration: 3000,
          });
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <Form style={{ width: "100%" }}>
        <Box w="100%" css={CustomCss}>
          <Field name="username">
            {({ field }) => (
              <InputGroup>
                <InputLeftElement
                  borderRadius="0"
                  pointerEvents="none"
                  children={<Icon as={AiOutlineUser} color="gray.400" />}
                />
                <Input placeholder="您的昵称" {...field} />
              </InputGroup>
            )}
          </Field>
          <ErrorMessage name="username">
            {(msg) => (
              <Text fontSize="sm" align="left" color="tomato">
                {msg}
              </Text>
            )}
          </ErrorMessage>
          <Field name="email">
            {({ field }) => (
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={AiOutlineMail} color="gray.400" />}
                />
                <Input placeholder="邮箱" {...field} />
              </InputGroup>
            )}
          </Field>
          <ErrorMessage name="email">
            {(msg) => (
              <Text fontSize="sm" align="left" color="tomato">
                {msg}
              </Text>
            )}
          </ErrorMessage>
          <Field name="password">
            {({ field }) => (
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={AiOutlineLock} color="gray.400" />}
                />
                <Input type="password" placeholder="设置密码" {...field} />
              </InputGroup>
            )}
          </Field>
          <ErrorMessage name="password">
            {(msg) => (
              <Text fontSize="sm" align="left" color="tomato">
                {msg}
              </Text>
            )}
          </ErrorMessage>
        </Box>
        <Button
          colorScheme="green"
          mt="15px"
          w="100%"
          borderRadius="2.5rem"
          type="submit"
          isLoading={isSubmitting}
        >
          注册
        </Button>
        <Box mt="50px">
          <CustomText>社交帐号直接注册</CustomText>
          <HStack justify="center" spacing="20px">
            <Icon as={AiOutlineWechat} w="28px" h="28px" color="#00bb29" />
            <Icon as={AiOutlineQq} w="28px" h="28px" color="#498ad5" />
          </HStack>
        </Box>
      </Form>
    </Formik>
  );
}

export default React.memo(SignUp);
