import { Button, useMediaQuery, useTheme } from '@mui/material'
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggle } from "../ModeSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
  // theme and colors
  const theme = useTheme();
  // const dark = theme.palette.
  const dark = theme.palette.neutral?.main;
  console.log(dark);

  // matches is true when media is a phone/tablet size
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  const mode = useAppSelector((state) => state.mode.darkMode);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  return (
    <>
      <Button variant="contained" sx={{backgroundColor: dark }} onClick={() => dispatch(toggle((mode === "dark") ? "light" : "dark"))}>
        Toggle Dark/Light
      </Button>
      {matches ? <h1>Mobile</h1> : <h2>Desktop</h2>}
    </>
  )
}
