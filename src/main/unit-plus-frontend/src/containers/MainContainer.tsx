import { FC } from 'react';
import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { SearchBar } from '../components/SearchBar';
import { List } from '../components/List';
import { useMainContainerEffects } from './MainContainer.effects';

export interface MainContainerProps {
  readonly?: boolean;
}

export const MainContainer: FC<MainContainerProps> = ({ readonly = false }: MainContainerProps) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState<string>(query || '');
  const [visible, setVisible] = useState<boolean>(false);
  const { filteredCustomers } = useMainContainerEffects(searchQuery);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setVisible={setVisible}
      />
      {searchQuery && visible && filteredCustomers.length > 0 ? (
        <List data={filteredCustomers}></List>
      ) : null}
    </div>
  );
};
