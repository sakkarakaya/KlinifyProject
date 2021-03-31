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
import {Link, useLocation, useParams} from 'react-router-dom';
//import Dimensions from 'react-dimensions';

// address: "hospital address2"
// id: "2"
// image: "https://www.neuerkerode.de/fileadmin/_processed_/c/f/csm_DC42536_b9d7705da0.jpg"
// name: "marienstift"
// rating: 4
// ratingNumber: "78"
// reviews: (3) [{…}, {…}, {…}]

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
    const data = useLocation();
    
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={data.state.image}
                        title= {data.state.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.state.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {data.state.address}
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
