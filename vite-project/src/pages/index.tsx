import React from 'react';
import {
  Box,
  Center,
  Circle,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Square
} from '@chakra-ui/react'

export const HomvePage = () => {
  return (
    <Box sx={{maxWidth: 'min(100%, 960px)', border: "1px solid red", m: 'auto'}}>
      <HStack spacing='24px'>
        <Box w='70px' h='10' bg='teal.500'/>
        <Box w='170px' h='10' bg='teal.500'/>
        <Box w='180px' h='10' bg='teal.500'/>
      </HStack>

      <Flex>
        <Box w='70px' h='10' bg='red.500'/>
        <Spacer/>
        <Box w='170px' h='10' bg='red.500'/>
        <Spacer/>
        <Box w='180px' h='10' bg='red.500'/>
      </Flex>

      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500'/>
        <GridItem w='100%' h='10' bg='blue.500'/>
        <GridItem w='100%' h='10' bg='blue.500'/>
        <GridItem w='100%' h='10' bg='blue.500'/>
        <GridItem w='100%' h='10' bg='blue.500'/>
      </Grid>

      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato'/>
        <GridItem colSpan={2} bg='papayawhip'/>
        <GridItem colSpan={2} bg='papayawhip'/>
        <GridItem colSpan={4} bg='aqua'/>
      </Grid>

      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={2} h='10' bg='tomato'/>
        <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip'/>
      </Grid>

      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </Box>
  );
};
