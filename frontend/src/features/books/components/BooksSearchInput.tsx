import { FunctionComponent } from "react";
import {
  Autocomplete,
  Box,
  Button,
  // Divider,
  ListItem,
  ListItemText,
  TextField,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export interface BooksSearchInputProps {
  onAddBook: (...args: any) => void;
  options: Record<string, any>[];
}

export const BooksSearchInput: FunctionComponent<BooksSearchInputProps> = ({
  onAddBook,
  options = [],
}) => {
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
        maxWidth: 550,
        margin: "auto",
        "& .MuiAutocomplete-popupIndicator": { transform: "none" },
      }}
      renderInput={(params) => <TextField {...params} label="Search book..." />}
      renderOption={(props, option, { index }, {}) => {
        return (
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
                secondary={`by ${option?.author}`}
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
          // <Divider />
        );
      }}
    />
  );
};

export default BooksSearchInput;
