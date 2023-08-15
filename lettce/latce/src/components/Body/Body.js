import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import {
  PlayCircleFilled as PlayCircleFilledIcon,
  Favorite as FavoriteIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
