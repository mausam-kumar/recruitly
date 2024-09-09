import React from 'react';
import { Text, Center, Stack } from '@mantine/core';

type ErrorStateProps = {
  message?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message = 'Failed to fetch company list. Please try again.' }) => {
  return (
    <Center style={{ height: '100vh' }}>
      <Stack align="center">
        <Text size="lg">
          {message}
        </Text>
      </Stack>
    </Center>
  );
};

export default ErrorState;