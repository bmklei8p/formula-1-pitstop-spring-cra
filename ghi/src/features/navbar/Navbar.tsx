import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material'

export const Navbar = () => {
  const theme = useTheme();
  // matches is true when media is a phone/tablet size
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {matches ? <h1>Mobile</h1> : <h2>Desktop</h2>}
    </>
  )
}
