import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material';

export const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: theme.palette.common.white
    }
  },
  wrapper: {
    display: 'inline-flex',
    margin: '0 0 32px',
    alignItems: 'center'
  },
  label: {
    fontSize: 14,
    lineHeight: '21px',
    fontWeight: 400,
    color: theme.palette.grey[600]
  },
  close: {
    color: theme.palette.common.white,
    cursor: 'pointer'
  },

  main: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '20px'
  },

  h1: {
    margin: '10px',
    fontSize: '40px',
    color: theme.palette.grey[600]
  },

  search: {
    width: '30%'
  }
}));
