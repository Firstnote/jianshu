import React from "react";
import {
  // Tabs,
  // TabList,
  Tab,
  // TabPanel,
  // TabPanels,
  // Box,
  // Flex,
  // Text,
  // Image,
  // useColorModeValue,
} from "@chakra-ui/react";

function CustomTab(props) {
  return (
    <Tab
      fontSize="18px"
      _focus={{ boxShadow: "none" }}
      _selected={{
        color: "#ea6f5a",
        fontWeight: 900,
        borderBottomColor: "#ea6f5a",
      }}
      p="10px"
    >
      {props.children}
    </Tab>
  );
}
export { CustomTab as Tab };
