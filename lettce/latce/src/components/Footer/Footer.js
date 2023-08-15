import React, { useEffect, useState } from "react";
import "./Footer.css";
import {
  PlayCircleOutline as PlayCircleOutlineIcon,
  SkipPrevious as SkipPreviousIcon,
  SkipNext as SkipNextIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  PlaylistPlay as PlaylistPlayIcon,
  VolumeDown as VolumeDownIcon,
  PauseCircleOutline as PauseCircleOutlineIcon,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer/DataLayer";

const Footer = () => {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://rockitpro.b-cdn.net/wp-content/uploads/whatdoumean-thumbnail.jpg"
          alt="album_logo"
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>What do you mean?</h4>
          <p>Justin Bieber</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
