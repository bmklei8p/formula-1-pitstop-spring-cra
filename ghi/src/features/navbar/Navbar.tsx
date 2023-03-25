import { useTheme } from "@mui/material/styles"
import { Button, useMediaQuery } from '@mui/material'
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggle } from "../ModeSlice";

export const Navbar = () => {
  const theme = useTheme();
  // matches is true when media is a phone/tablet size
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const mode = useAppSelector((state) => state.mode.darkMode);
  const dispatch = useAppDispatch();

  return (
    <>
      <Button onClick={() => dispatch(toggle((mode === "dark") ? "light" : "dark"))}>
        Toggle Dark/Light
      </Button>
      {matches ? <h1>Mobile</h1> : <h2>Desktop</h2>}
    </>
  )
}
