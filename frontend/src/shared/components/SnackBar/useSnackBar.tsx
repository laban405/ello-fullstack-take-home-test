import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export interface SnackbarProps {
  showSnackbar: (message: string, severity?: 'success' | 'error' | 'info' | 'warning') => void;
}

const useSnackbar = ()=> {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');

  const showSnackbar = (newMessage: string, newSeverity: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  const hideSnackbar = () => {
    setOpen(false);
  };

  const SnackbarComponent = () => (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
      autoHideDuration={6000}
      onClose={hideSnackbar}
    >
      <Alert onClose={hideSnackbar} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};

export default useSnackbar;
