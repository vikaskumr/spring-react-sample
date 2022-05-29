import { FC } from 'react';
import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { SearchBar } from '../components/SearchBar';
import { List } from '../components/List';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
}

const persons: Person[] = [
  { id: '1', firstName: 'Vikas', lastName: 'Kumar' },
  { id: '2', firstName: 'Vinay', lastName: 'Kumar' },
  { id: '3', firstName: 'Komal', lastName: 'Kumar' },
  { id: '4', firstName: 'Robin', lastName: 'Kumar' }
];

const filterpersons = (persons: Person[], query: string): Person[] => {
  if (!query) {
    return persons;
  }

  return persons.filter((person: Person) => {
    const personFirstName: string = person.firstName.toLowerCase();
    return personFirstName.includes(query.toLocaleLowerCase());
  });
};

export interface MainContainerProps {
  readonly?: boolean;
}

export const MainContainer: FC<MainContainerProps> = ({ readonly = false }: MainContainerProps) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState<string>(query || '');
  const filteredpersons: Person[] = filterpersons(persons, searchQuery);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setVisible={setVisible}
      />

      {searchQuery && visible && filteredpersons.length > 0 ? (
        <List data={filteredpersons}></List>
      ) : null}
    </div>
  );
};
