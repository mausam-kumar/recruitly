import React from 'react';
import { Card, Text, Button, Stack, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface CompanyCardProps {
  name: string;
  ownerName: string;
  id: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, ownerName, id }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/company/${id}`);
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack>
        <Flex justify="space-between" align="center">
          <Text size="lg">
            {name}
          </Text>
          <Text size="sm">
            Owner: {ownerName}
          </Text>
        </Flex>
        <Flex justify="space-between" gap={10} align="center">
          <Button variant="light" color="blue" fullWidth radius="md" onClick={handleViewDetails}>
            View Details
          </Button>
          <Button variant="light" color="blue" fullWidth radius="md" onClick={handleEdit}>
            Edit Details
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};

export default CompanyCard;