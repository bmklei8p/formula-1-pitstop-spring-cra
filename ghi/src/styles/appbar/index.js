import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
}));

export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '"Montez", "Cursive"',
    color: "Red",
}));