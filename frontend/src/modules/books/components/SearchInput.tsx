import { FunctionComponent, useCallback } from "react";
import debounce from "../../../shared/utils/debounce";
import {
  Autocomplete,
  Button,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export interface SearchInputProps {
  onSearch: (...args: any) => void;
  onAddBook: (...args: any) => void;
  debounceTime: number;
  options: Record<string, any>[];
}

export const SearchInput: FunctionComponent<SearchInputProps> = ({
  onSearch,
  onAddBook,
  debounceTime = 300,
  options = [],
}) => {
  const value = "";
  const handleSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, debounceTime),
    [onSearch]
  );

  const handleChange = (event: any) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <Autocomplete
      id="seach-input"
      options={options}
      getOptionLabel={(option) => option.title}
      getOptionKey={(option) => `${option.title + option.author}`}
      sx={{ width: "100%", minWidth: 400, maxWidth: 500, margin: "auto" }}
      onInputChange={(event) => handleChange(event)}
      renderInput={(params) => (
        <TextField {...params} value={value} label="Search book..." />
      )}
      renderOption={(props, option, { index }, {}) => {
        return (
          <ListItem
            {...props}
            sx={{ display: "flex" }}
            key={`${option?.title + option?.author}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ListItemText
              sx={{ flex: 1 }}
              primary={option?.title}
              secondary={option?.author}
            />

            <Button
              size="small"
              fullWidth={true}
              sx={{ width: "170px" }}
              variant="outlined"
              onClick={() => option && onAddBook(option, index)}
            >
              Add to Reading List
            </Button>
          </ListItem>
        );
      }}
    />
  );
};

export default SearchInput;
