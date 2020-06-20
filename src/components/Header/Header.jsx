import React from 'react';

// Primer imports:
// import { Flex, Box, Heading, Text, Grid } from '@primer/components'

// Chakra imports:
import { Heading, Flex } from "@chakra-ui/core";

const Header = () => {
    return (
      <>
        <Flex
          as="nav"
          align="center"
          justify="start"
          wrap="wrap"
          padding="1.5rem"
          bg="teal"
          color="white"
        >
          <Flex align="center" mr={4}>
            <Heading as="h1" size="lg" letterSpacing={".1rem"}>
              Reflections
            </Heading>
          </Flex>
          <Flex align="center" mr={2}>
            <Heading as="h1" size="m" letterSpacing={".1rem"}>
              Please do one every day
            </Heading>
          </Flex>
        </Flex>
      </>
    );
}

export default Header;