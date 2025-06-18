import React from "react";
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmailForm from "./composants/EmailForm";
import LoginSignup from "./composants/LoginSignup";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0
        }
      }
    }
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <EmailForm />
          <LoginSignup />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
