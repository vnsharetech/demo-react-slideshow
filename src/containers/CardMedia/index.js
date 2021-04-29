import "./card.scss";
import MediaCard from "../Card";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { getDetail } from "./selector";
import { useSelector } from "react-redux";

function CardMedia() {
  const detail = useSelector(getDetail());
  return (
    <div className="App">
      <div className="slide-show">
        <h2 className="slide-show__title">{detail.title}</h2>
        <div className="slide-show__content">{detail.content}</div>
        <div className="slide-show__wrapper">
          <div className="slide-show__item slide-show__item--left">
            <MediaCard />
          </div>
          <div className="slide-show__item slide-show__item--center">
            <MediaCard />
          </div>
          <div className="slide-show__item slide-show__item--right">
            <MediaCard />
          </div>
          <div className="slide-show__nav-btn slide-show__next-btn">
            <ArrowRightAltIcon />
          </div>
          <div className="slide-show__nav-btn slide-show__prev-btn">
            <ArrowRightAltIcon />
          </div>
        </div>

        <Button
          variant="contained"
          color="secondary"
          className="slide-show__button"
        >
          View all projects
        </Button>
      </div>
    </div>
  );
}

export default CardMedia;
