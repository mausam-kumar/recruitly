import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBack} variant="light">
      Back
    </Button>
  );
};

export default BackButton;