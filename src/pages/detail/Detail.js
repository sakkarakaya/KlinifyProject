import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Reviewtexts from './Reviewtexts';
//import Dimensions from 'react-dimensions';



const useStyles = makeStyles({


    root: {
        maxWidth: "100%",
    },
    media: {
        // height: Math.round(dimensions.width * 9 / 16), width: Dimensions.get('window').width

        width: 960,
        height: 540


    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.deutsches-krankenhaus-verzeichnis.de/app/file/image/show/039d2d2d7948ef77_d08ce7f2-cdce-449d-a8fb-f11ed90eb888.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Dr Hoffmann Augenklinik
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hier steht Addresse
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Reviewtexts/>
        </div>
    );
}


// const Detail = () => {
//     return (
//         <div>
//             Detail Page
//         </div>
//     )
// }

// export default Detail;
