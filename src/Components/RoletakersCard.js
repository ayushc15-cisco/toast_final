import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/PersonPin';
import EvaluatorIcon from '@material-ui/icons/HowToReg'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export default function RoletakersCard(props) {
    const classes = useStyles();

    if (props.name == "Speakers") {
        return (

            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        component="img"

                        height="200"
                        image={props.imageURL}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem>

                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ayush Chaturvedi" />
                            </ListItem>
                            <ListItem>

                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Vijay Jagannathan" />
                            </ListItem>

                        </List>
                    </CardContent>
                </CardActionArea>

            </Card>
        );
    }
    else if (props.name == "Respective Evaluators") {
        return (

            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        component="img"

                        height="200"
                        image={props.imageURL}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <List component="nav">
                            <ListItem>
                                <ListItemIcon>
                                    <EvaluatorIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ayush Chaturvedi" />
                            </ListItem>
                            <ListItem>

                                <ListItemIcon>
                                    <EvaluatorIcon />
                                </ListItemIcon>
                                <ListItemText primary="Vijay Jagannathan" />
                            </ListItem>

                        </List>
                    </CardContent>
                </CardActionArea>

            </Card>
        );
    }



    else {
        return (

            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        component="img"

                        height="200"
                       
                        image={props.imageURL}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="p">
                            {props.name}
                        </Typography>
                        <Typography variant="h3" color="textSecondary" component="h1">
                           Ankur
              </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        );
    }

}
