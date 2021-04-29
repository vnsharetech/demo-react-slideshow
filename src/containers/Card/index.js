import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function MediaCard(props) {
  return (
    <Card className="card-item">
      <CardActionArea>
        <CardMedia
          className="card-item__image"
          image="/assets/images/vr-player.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="card-item__title"
          >
            Cutting EDGE
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="card-item__content"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-item__button-container">
        <Button
          variant="contained"
          color="secondary"
          className="card-item__button"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
