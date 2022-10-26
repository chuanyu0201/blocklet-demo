import { memo } from 'react';
import TextField from '@mui/material/TextField';

const Search = memo((props: {
  value: string,
  onChange: (value: string) => void
}) => {
  return <TextField
    value={props.value}
    size='small'
    fullWidth
    label='Block hash'
    variant='outlined'
    onChange={(e) => props.onChange(e.target.value)} />;
});
export default Search;
