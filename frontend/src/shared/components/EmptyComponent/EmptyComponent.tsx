import { Paper, Typography } from "@mui/material";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
export interface EmptyComponentProps {
  message: string;
}

export const EmptyComponent: React.FC<EmptyComponentProps> = ({
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
      <PlaylistRemoveIcon color="primary" sx={{ fontSize: 50,marginBottom:5 }}/>
      <Typography variant="subtitle1" gutterBottom>
        {message}
      </Typography>
    </Paper>
  );
};

export default EmptyComponent;
