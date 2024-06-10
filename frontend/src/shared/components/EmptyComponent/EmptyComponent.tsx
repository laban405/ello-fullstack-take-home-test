import { Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
export interface EmptyComponentProps {
  message: string;
}

export const EmptyComponent: FunctionComponent<EmptyComponentProps> = ({
  message,
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop:5,
        flexDirection:'column',
        textAlign:'center'
      }}
    >
      <PlaylistRemoveIcon sx={{ fontSize: 50,marginBottom:5 }}/>
      <Typography variant="subtitle1" gutterBottom>
        {message}
      </Typography>
    </Paper>
  );
};

export default EmptyComponent;
