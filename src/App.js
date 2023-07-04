import { Landing } from "./pages/Landing";
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#0c7c85',
  borderRadius: '16px',
  borderCircle: '50%',
  borderPrimary: '2px solid #d2e054'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
