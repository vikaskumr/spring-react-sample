import { Link } from 'react-router-dom';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
}
export interface ListProps {
  data: Person[];
}

export const List = (props: ListProps) => {
  return (
    <ul>
      {props.data.map((person) => (
        <li key={person.id}>
          <Link to="/personDetails">
            {person.firstName}/ {person.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
