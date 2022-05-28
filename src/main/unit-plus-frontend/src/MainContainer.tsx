import { FC } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Announcer } from './components/Announcer';
import { Box } from '@mui/material';

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
    const personFirstName = person.firstName.toLowerCase();
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
  const filteredpersons = filterpersons(persons, searchQuery);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <Announcer message={`${filteredpersons.length} persons`} />
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setVisible={setVisible}
        />

        {searchQuery && visible && filteredpersons.length > 0 ? (
          <ul>
            {filteredpersons.map((person) => (
              <li key={person.id}>
                {person.firstName}/ {person.lastName}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Router>
  );
};
