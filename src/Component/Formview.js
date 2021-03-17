import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import {
  Tabs,
  TabList,
  // Tab,
  TabPanel,
  TabPanels,
  Box,
  Flex,
  Text,
  // Image,
  // useColorModeValue,
} from "@chakra-ui/react";

import { Tab } from "./Custom";

function Formview(props) {
  return (
    <Box
      bgColor="white"
      p="50px"
      boxShadow="lg"
      borderRadius="lg"
      mx="auto"
      my="20px"
    >
      <Tabs color="#969696" fontSize="18px">
        <TabList borderBottomColor="transparent">
          <Flex justifyContent="center" alignItems="center" w="100%">
            <Tab>登录</Tab>
            <Text p="10px">·</Text>
            <Tab>注册</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Signin />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Formview;
