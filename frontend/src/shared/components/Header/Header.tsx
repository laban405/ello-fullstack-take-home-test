import { Box } from "@mui/material"
import Logo from "../Logo/Logo"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const Header = ()=>{
    return  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 2,
    }}
  >
    <Logo />
  
    <ThemeSwitcher />
  </Box>
}

export default Header;