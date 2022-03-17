import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export const ProjectCard = ({ title, desc, imageUrl, demo, github }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
                component='a'
                href={demo}
                target="_blank">
                <CardMedia
                    component="img"
                    alt={imageUrl}
                    height="250"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" component='a' href={demo} target='_blank'>Live Demo</Button>
                <Button size="small" component='a' href={github} target='_blank'>github</Button>
            </CardActions>
        </Card>
    )
}
