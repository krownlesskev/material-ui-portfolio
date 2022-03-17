import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'

import { ProjectCard } from './ProjectCard'
import { projectData } from './projectData'
const { project1} = projectData


export const Projects = () => {
    return (
        <Container sx={{ pt: 25 }} id='projects' maxWidth='xl' >
            <Typography variant='h4'>Projects</Typography>
            <hr />
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>
                <ProjectCard
                    title={project1.title}
                    desc={project1.desc}
                    imageUrl={project1.imageUrl}
                    demo={project1.demo}
                    github={project1.github} />
            </Box>
        </Container >
    )
}
