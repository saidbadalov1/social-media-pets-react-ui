import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row"  justifyContent="space-between">
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
  );
}

export default App;
