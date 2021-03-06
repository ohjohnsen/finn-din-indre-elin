import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { resultStrings } from '../lib/strings';

const ResultScreen = ({ data, onClick }) => {
  return (
    <Flex
      width={['18rem', '25rem', '40rem']}
      background="pink.100"
      padding={['3rem 1rem', '4rem 1.5rem', '5rem 2rem']}
      flexDirection="column"
      gridGap="2rem"
      borderRadius="1rem"
      boxShadow="2xl"
      fontSize="1.5rem"
      alignItems="center"
    >
      <Text color="pink.800" fontSize={['1.5rem', '2.2rem', '3.5rem']}>
        Du er {data.innerElinFactorPercentage}% Elin
      </Text>
      <Text color="pink.800" fontSize={['1rem', '1.5rem', '2rem']} textAlign="center">
        {resultStrings.find(obj => obj.lowLimit < data.innerElinFactorPercentage).message}
      </Text>

      <Button
        background="pink.300"
        fontSize={['1rem', '1.12rem', '1.25rem']}
        marginTop="1rem"
        _hover={{
          background: 'pink.200',
        }}
        onClick={onClick}
      >
        PRØV PÅ NYTT
      </Button>
    </Flex>
  );
};

export default ResultScreen;
