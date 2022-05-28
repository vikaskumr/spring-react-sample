import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

export const PersonDetails = () => {
  const { id } = useParams();

  return (
    <Box>
      <p>First Name: Vikas</p>
      <p>First Name: Kumar</p>
      {/* <p>Email: {props.email}</p>
      <p>Portfolio Id: {props.portfolioId}</p>
      <p>Portfolio Valuation: {props.portfolioValuation}</p> */}
    </Box>
  );
};
