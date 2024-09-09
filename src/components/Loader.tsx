import React from 'react';
import { Loader as MantineLoader, Center, Text } from '@mantine/core';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <Center style={{ height: '100vh', flexDirection: 'column' }}>
      <MantineLoader size="lg" variant="dots" />
      <Text mt="md">{message}</Text>
    </Center>
  );
};

export default Loader;