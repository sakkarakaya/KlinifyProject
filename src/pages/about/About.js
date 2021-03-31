import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Taner from '../../assets/images/taner.jpeg';
import Fatih from '../../assets/images/fatih.jpeg';
import Eftal from '../../assets/images/eftal.jpeg';
import Mehmet from '../../assets/images/mehmet.jpeg';
import "./style.css";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div id="about">
            <h2>About Us</h2>
            <div className={classes.root}>
                <div class="item">
                    <Avatar className={classes.large} alt="Taner" src={Taner} />
                    <span class="caption">Taner</span>
                </div>
                <div class="item">
                    <Avatar className={classes.large} alt="Fatih" src={Fatih} />
                    <span class="caption">Fatih</span>
                </div>
                <div class="item">
                    <Avatar className={classes.large} alt="Eftal" src={Eftal} />
                    <span class="caption">Eftal</span>
                </div>
                <div class="item">
                    <Avatar className={classes.large} alt="Mehmet" src={Mehmet} />
                    <span class="caption">Mehmet</span>
                </div>

                

                
                
                

            </div>
            <p>
                Klinify was done as a graduation project within the scope of the ongoing Refugeeks project at Hannover University. Google Maps and Klinikbewertungen.de comments and scores of hospitals in Hannover and surrounding cities were taken, re-evaluated and re-scored using machine learning algorithms. The results obtained were transferred to the web page designed by the team.

            </p>
            <p>
                This project was realized by Taner, Fatih, Eftal and Mehmet. By using Jira project management software and Git version management, the projects were shared on GitHub and a total of 2 Sprints were implemented. Sentiment analysis was used as machine algorithms and React was used as front end technology. The data has been obtained using flask technology on the back end.
            </p>

        </div>

    );
}

export default About;




