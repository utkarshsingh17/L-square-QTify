
import './App.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage'
function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <HomePage/>
    </StyledEngineProvider>

    </>
  );
}

export default App;
