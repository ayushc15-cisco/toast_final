import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../assets/logos/toastmasters.png"
import { Stepper, CardHeader } from '@material-ui/core';
import List from './list.js'

import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({


    card: {
        minWidth: 275,
        maxWidth: 1500,


    },

});

const wrapper_style = {
    height: "auto",
    minHeight:"100%",
    margin: "0",
    width: "100%",

    backgroundImage: `url(https://arcdn.bayut.com/area-guides/wp-content/uploads/2018/04/JW-Marquis.jpg)`,

    backgroundRepeat: "no-repeat",
    
    backgroundSize: "cover",
    lineHeight: "100%",
   
    alignContent:"space-around"






}

export default function SimpleCard() {
    const classes = useStyles();


    return (


        <Box style={wrapper_style} display="flex" justifyContent="center" flexDirection="column" alignItems="center" >
            
                <img src="https://seeklogo.com/images/T/toastmasters-logo-89ACA2E00C-seeklogo.com.png" style={{ maxWidth: "500px" }} />

                <Card className={classes.card} >
                  
                    <CardHeader title="Cisco Communications Club" subheader= "Nomination And Progress Tool"  style={{textAlign: 'center'}}/>
                        
                    <CardContent>
                        <List/>
                    </CardContent>
                  

                </Card>
            
            
            
        </Box>


    );
}