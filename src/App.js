import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CurrencyConverter from "./components/CurrencyConverter";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <Box color = {"text.primary"} className="App">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between" height="100%">
        <Sidebar />
        <CurrencyConverter />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
