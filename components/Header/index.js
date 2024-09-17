import { Box } from "@mui/material";
import ColorModeButton from "./ColorModeButton";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Box
      sx={{
        positon: "fixed",
        borderBottom: "1px solid grey",
        boxShadow: "0 0 5px gray",
        bgcolor: "#003366",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 0.5,
        }}
      >
        <Box sx={{ width: { xs: "95%", sm: "320px" }, mx: "auto" }}>
          <Logo />
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" }, flex: 1 }}>
          <NavBar />
        </Box>
        <ColorModeButton />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Header;
