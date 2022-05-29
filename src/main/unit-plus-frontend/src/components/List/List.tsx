import { Link } from 'react-router-dom';
import { Customer } from '../../containers/dto/customer-response.dto';
export interface ListProps {
  data: Customer[];
}

export const List = (props: ListProps) => {
  return (
    <ul>
      {props.data.map((customer) => (
        <li key={customer.portfolioId}>
          <Link to={`/personDetails/${customer.portfolioId}`}>
            {customer.firstName}/ {customer.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
