import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const EmailForm = () => {
  const form = useRef();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_3yueudb',
        'template_h7c7qn4',
        form.current,
        'KD5wy5vkLQBWBPvEo'
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: 'Email envoyé avec succès ✅',
            severity: 'success',
          });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setSnackbar({
            open: true,
            message: 'Erreur lors de l’envoi ❌',
            severity: 'error',
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', maxWidth: 500 }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            color: '#fff',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
             Envoyer un email
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              label="Email du destinataire"
              name="to_email"
              type="email"
              required
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              fullWidth
              label="Votre nom"
              name="user_name"
              required
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              fullWidth
              label="Votre message"
              name="message"
              multiline
              rows={4}
              required
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#ff6b6b',
                '&:hover': { backgroundColor: '#ff4757' },
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: '#fff' }} />
              ) : (
                'Envoyer le message'
              )}
            </Button>
          </form>
        </Paper>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EmailForm;
