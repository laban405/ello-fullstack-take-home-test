import { FunctionComponent, useCallback } from "react";
import debounce from "@/shared/utils/debounce";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  ListItem,
  ListItemText,
  TextField,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export interface BooksSearchInputProps {
  onSearch: (...args: any) => void;
  onAddBook: (...args: any) => void;
  debounceTime: number;
  options: Record<string, any>[];
}

export const BooksSearchInput: FunctionComponent<BooksSearchInputProps> = ({
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

  const theme = useTheme();

  return (
    <Autocomplete
      popupIcon={<SearchIcon color="primary" />}
      id="seach-input"
      options={options}
      getOptionLabel={(option) => option.title}
      getOptionKey={(option) => `${option.title + option.author}`}
      sx={{
        width: "100%",
        // minWidth: 400,
        maxWidth: 550,
        margin: "auto",
        "& .MuiAutocomplete-popupIndicator": { transform: "none" },
      }}
      onInputChange={(event) => handleChange(event)}
      renderInput={(params) => (
        <TextField {...params} value={value} label="Search book..." />
      )}
      renderOption={(props, option, { index }, {}) => {
        return (
          <>
            <ListItem
              {...props}
              sx={{
                display: "flex",
                gap: 1,
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                },
              }}
              key={`${option?.title + option?.author}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Box sx={{ display: "flex", flex: 1 }}>
                <img
                  srcSet={`${option.coverPhotoURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${option.coverPhotoURL}?w=164&h=164&fit=crop&auto=format`}
                  alt={option.title}
                  loading="lazy"
                  width={100}
                />
                <ListItemText
                  sx={{ flex: 1, marginLeft: 1 }}
                  primary={option?.title}
                  secondary={option?.author}
                />
              </Box>

              <Button
                disabled={option.isInReadingList}
                size="small"
                fullWidth={true}
                sx={{
                  minWidth: "170px",
                  maxWidth: "170px",
                  borderRadius: "20px",
                }}
                variant="contained"
                disableElevation
                onClick={() => option && onAddBook(option, index)}
              >
                {option.isInReadingList
                  ? "Book in reading list"
                  : "Add to Reading List"}
              </Button>
            </ListItem>
            <Divider />
          </>
        );
      }}
    />
  );
};

export default BooksSearchInput;
