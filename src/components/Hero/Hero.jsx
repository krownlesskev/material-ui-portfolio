import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'

export const Hero = () => {
    return (
        <Container id='hero' maxWidth='xl'>
            <Box sx={{
                height: '95vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box>
                    <Typography variant='button'>Hi There! I'm</Typography>
                    <Typography variant='h2'>
                        <span style={{ color: '#2196f3' }}>Kevin</span> Sana
                    </Typography>
                    <Typography variant='h4'>
                    Web <span style={{ color: '#2196f3' }}>Developer</span>
                    </Typography>
                </Box>
            </Box>
        </Container >
    )
}


