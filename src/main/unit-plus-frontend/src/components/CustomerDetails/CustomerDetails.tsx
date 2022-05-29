import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useCustomerDetailsEffects } from './CustomerDetails.effects';

export const CustomerDetails = () => {
  const { portfolioId } = useParams();

  const { customerDetails } = useCustomerDetailsEffects(Number(portfolioId));

  return (
    <Box>
      <p>First Name: {customerDetails?.firstName}</p>
      <p>Last Name: {customerDetails?.lastName}</p>
      <p>Email: {customerDetails?.emailAddress}</p>
      <p>Portfolio Id: {customerDetails?.portfolioId}</p>
      <p>Portfolio Valuation: {customerDetails?.portfolioValuation}</p>
    </Box>
  );
};
