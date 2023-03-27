import {
  useTheme,
  ListItemText,
  ListItemButton,
  List,
  IconButton,
  Box
} from '@mui/material'

import {
  DarkMode,
  LightMode,
} from '@mui/icons-material'
import { toggle } from "../ModeSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';

interface NavbarLinkDetails {
  linkName: string,
  linkURL: string,
}

interface NavbarProps {
  matches: boolean,
  links: NavbarLinkDetails[],
}

// declare module '@mui/material' {
//   // allow configuration using `createTheme`
//   interface ListItemButton {
//     key?: Key;
//   }
// }

export const NavbarDesktop = (props: NavbarProps) => {
  const theme = useTheme();
  // const dark = theme.palette.neutral?.dark;
  // const neutralLight = theme.palette.neutral?.light;
  // const background = theme.palette.background.default;
  // const primaryLight = theme.palette.primary.light;
  // const alt = theme.palette.background.alt;

  const mode = useAppSelector((state) => state.mode.darkMode);
  console.log(mode);
  console.log(typeof mode);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavBarListItemClick = (link: NavbarLinkDetails) => {
    navigate(link.linkURL);
  }
  // const handleKeyChange = (link: string) => {
  //   let key = typeof
  // }
  return (
    <AppbarContainer>
        <AppbarHeader>
          F1-Pitstop
        </AppbarHeader>
        {/* this doesn't use a styled component because I need display to change based on mobile/desktop
        and I couldn't get the type checking to work by passing in a prop to the styled component */}
        <List sx={{display: 'flex', flexGrow: 3, justifyContent: 'center', alignItems: 'center'}} >
          {props.links.map((link) => (
            <ListItemButton key={link.linkName} onClick={() => handleNavBarListItemClick(link)}>
              <ListItemText primary={link.linkName} />
            </ListItemButton>
          ))}
        </List>
        <Box>
          <IconButton onClick={() => dispatch(toggle(mode === 'light' ? 'dark' : 'light'))}>
             {mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
    </AppbarContainer>
  )
}




      /* <Button variant="contained" sx={{backgroundColor: dark }} onClick={() => dispatch(toggle((mode === "dark") ? "light" : "dark"))}>
        Toggle Dark/Light
      </Button> */