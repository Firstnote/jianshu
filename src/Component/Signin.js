import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Checkbox,
  Link,
  Button,
  HStack,
  Icon,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineWeibo,
  AiOutlineWechat,
  AiOutlineQq,
} from "react-icons/ai";
import CustomText from "./CustomText";
import CustomCss from "./CustomCss";
import { signIn } from "../services";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("无效的邮箱地址").required("Required"),
  password: Yup.string().min(8, "密码长度不小于8").required("Required"),
});

function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  console.log(SignInSchema);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={async (values, actions) => {
        setIsSubmitting(true);
        try {
          await signIn(values);
          toast({
            position: "top",
            title: "Sign in success.",
            status: "success",
            duration: 3000,
          });
        } catch (err) {
          let errors = err.response.data.errors;
          let message = "";
          for (const iterator in errors) {
            message += `${iterator}:${errors[iterator]}\n`;
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
      <Form>
        <Box w="100%" css={CustomCss}>
          <Field name="email">
            {({ field }) => (
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={AiOutlineUser} color="gray.400" />}
                />
                <Input placeholder="手机号或邮箱" {...field} />
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
                <Input type="password" placeholder="密码" {...field} />
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
        <Flex justify="space-between" mt="15px">
          <Checkbox defaultIsChecked>记住我</Checkbox>
          <Link>登录遇到问题?</Link>
        </Flex>
        <Button
          colorScheme="blue"
          mt="15px"
          mb="50px"
          w="100%"
          borderRadius="2.5rem"
          type="submit"
          isLoading={isSubmitting}
        >
          登录
        </Button>
        <CustomText>社交帐号登录</CustomText>
        <HStack justify="center" spacing="20px">
          <Icon as={AiOutlineWeibo} w="28px" h="28px" color="#e05244" />
          <Icon as={AiOutlineWechat} w="28px" h="28px" color="#00bb29" />
          <Icon as={AiOutlineQq} w="28px" h="28px" color="#498ad5" />
        </HStack>
      </Form>
    </Formik>
  );
}

export default React.memo(SignIn);
