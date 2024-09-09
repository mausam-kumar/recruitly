import { Button, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth()

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Flex justify="space-between" my={20}>
      <Button onClick={handleBack} variant="light">
        Back
      </Button>
      <Button variant="light" color="red" radius="md" onClick={logout}>
        Logout
      </Button>
    </Flex>
  );
};

export default BackButton;