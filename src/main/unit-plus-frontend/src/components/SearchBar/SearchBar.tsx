import { Close } from '@mui/icons-material';
import { Box, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { useSearchEffects } from './SearchBar.effects';
import { useStyles } from './SearchBar.styles';
export interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setVisible: (value: boolean) => void;
  debounceTime?: number;
}

export const SearchBar = (props: SearchProps) => {
  const { classes } = useStyles();
  const { field, handleReset, onFilterChange, inputProps, value } = useSearchEffects(props);

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setVisible(true);
  };

  return (
    <Box className={classes.wrapper}>
      <TextField
        fullWidth
        type="text"
        margin="normal"
        variant="outlined"
        name={inputProps.name}
        className={classes.root}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onFilterChange(event.target.value);
          inputProps.onChange(event);
        }}
        inputRef={inputProps.ref}
        inputProps={{
          ...field.inputProps
        }}
        InputProps={{
          endAdornment: value && (
            <InputAdornment position="end">
              <Close className={classes.close} onClick={handleReset} />
            </InputAdornment>
          )
        }}
      />

      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </Box>
  );
};
