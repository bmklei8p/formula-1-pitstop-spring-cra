import {
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material'

import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from '@mui/icons-material'
import { toggle } from "../ModeSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

interface NavbarProps {
  matches: boolean
}

export const NavbarDesktop = (props: NavbarProps) => {
  console.log(props.matches);
  const theme = useTheme();
  const dark = theme.palette.neutral?.dark;
  const neutralLight = theme.palette.neutral?.light;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const mode = useAppSelector((state) => state.mode.darkMode);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box>
        NavbarDesktop
    </Box>
  )
}




      /* <Button variant="contained" sx={{backgroundColor: dark }} onClick={() => dispatch(toggle((mode === "dark") ? "light" : "dark"))}>
        Toggle Dark/Light
      </Button> */