import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Flex,
  // Image,
  // useColorModeValue,
} from "@chakra-ui/react";

function Formview(params) {
  return (
    <Box
      bgColor="white"
      p="50px"
      w="300px"
      boxShadow="lg"
      borderRadius="lg"
      mx="auto"
      my="20px"
    >
      <Tabs>
        <TabList borderBottomColor="transparent">
          <Flex justifyContent="center" w="100%">
            <Tab _focus={{ boxShadow: "none" }}>One</Tab>
            <Tab _focus={{ boxShadow: "none" }}>Two</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Formview;
