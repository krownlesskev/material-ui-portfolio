import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';
const { project1, project2, project3 } = projectData;


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
                <ProjectCard
                    title={project2.title}
                    desc={project2.desc}
                    imageUrl={project2.imageUrl}
                    demo={project2.demo}
                    github={project2.github} />
                <ProjectCard
                    title={project3.title}
                    desc={project3.desc}
                    imageUrl={project3.imageUrl}
                    demo={project3.demo}
                    github={project3.github} />
            </Box>
        </Container >
    );
};
