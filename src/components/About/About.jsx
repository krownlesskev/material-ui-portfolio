import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'

export const About = () => {
    return (
        <Container id="about" maxWidth='xl'>
            <Typography variant='h4'>About Me</Typography>
            <hr />
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
            }}>
            </Box>

            <Typography sx={{
                p: 5,
                fontWeight: 500,
                backgroundColor: 'white',
                borderRadius: 10
            }} variant='h6'>
                I am a self-taught developer located in Winnipeg, MB.
                I am a highly motivated self starter with a passion for learning and creating web applications.
                Recent Graduate of the <span style={{ color: '#2196f3' }}>ZTM The Complete Web Developer in 2022. </span>
                I've particpated in several online courses on udemy, the odin project, codecademy, and much more!
                I am graduate of Roberston College, with a diploma for Network Systems Administrator and
                currently an undergrad for computer science at <span style={{ color: '#2196f3' }}>
                    University of Manitoba. </span>
                I love spending time outdoors whether its hiking, camping or just enjoying a cozy bonfire.
                I also partake in health and fitness, with a knowledgable background in weight lifting and nutrition.
            </Typography>
        </Container >
    )
}
