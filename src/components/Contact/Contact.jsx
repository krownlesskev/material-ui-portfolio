import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'


export const Contact = () => {


    return (
        <Container sx={{ height: '25vh', pt: 10 }} id="contact" maxWidth='xl'>
            <Typography variant='h4'>Contact</Typography>
            <hr />
            <Box sx={{
                height: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10
            }}>
                <Link
                    variant='h5'
                    href='mailto:kevin.sana@outlook.com'
                    underline="hover">
                    kevin.sana@outlook.com
                </Link>
            </Box>
        </Container >
    )
}
