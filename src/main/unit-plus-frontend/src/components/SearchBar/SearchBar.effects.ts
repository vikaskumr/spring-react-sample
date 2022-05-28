import { useAsyncDebounce } from 'react-table';
import { useForm, FieldValues } from 'react-hook-form';
import { SearchProps } from './SearchBar';

export const useSearchEffects = ({
  searchQuery,
  setSearchQuery,
  setVisible,
  debounceTime = 300
}: SearchProps) => {
  const onSearchFilterChange = useAsyncDebounce((value: string) => {
    setSearchQuery(value || '');
  }, debounceTime);

  const { register, reset, watch } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: { search: searchQuery }
  });

  const field = {
    name: 'search',
    inputProps: {
      placeholder: 'Search'
    }
  };

  const inputProps = register(field.name);
  const value = watch(field.name);

  const handleReset = () => {
    onSearchFilterChange('');
    setVisible(false);
    reset({ search: '' });
  };

  return {
    field,
    handleReset,
    onFilterChange: onSearchFilterChange,
    inputProps,
    value
  };
};
