import { useAppSelector } from '../../app/hooks';
import { Box, Stack } from '@mui/material'
import logo from './f1_2021_mercedes_logo.png'

export const Podium = () => {
    const boxWidth = '150px'
    return (
        <Box padding={"6px"}>
            <Stack direction={'row'}>
                <Box display={'flex'} sx={{alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end'}} width={boxWidth} height={'300px'}>
                    <Box display={'flex'}>
                        <img width={'50px'} height={'50px'} src={logo} />
                    </Box>
                    <Box display={'flex'} sx={{backgroundColor: 'grey', borderRadius: '15px 15px 0px 5px'}} width={boxWidth} height={'160px'}>
                    </Box>
                </Box>
                <Box display={'flex'} sx={{alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end'}} width={boxWidth} height={'300px'}>
                    <Box display={'flex'}>
                        <img width={'50px'} height={'50px'} src={logo} />
                    </Box>
                    <Box display={'flex'} sx={{backgroundColor: 'grey', borderRadius: '15px 15px 0px 0px'}} width={boxWidth} height={'225px'}>
                        <Box sx={{alignItems: 'center', justifyContent: 'center'}} display={'flex'} width={boxWidth} height={'225px'}>
                            1
                        </Box>
                    </Box>
                </Box>
                <Box display={'flex'} sx={{alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end'}} width={boxWidth} height={'300px'}>
                    <Box display={'flex'}>
                        <img width={'50px'} height={'50px'} src={logo} />
                    </Box>
                    <Box display={'flex'} sx={{backgroundColor: 'grey', borderRadius: '15px 15px 5px 0px'}} width={boxWidth} height={'125px'}>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

// to-do: add 1, 2, 3 for the numbers of which stand (look at podium 1st place)
// dynamic depending on constructor
// shadowing/layering to make the 1st to appear in front of the 2nd/3rd

// alignSelf: flex-end on a box will start the box property on the bottom of the item