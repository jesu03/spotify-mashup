import React from "react";
import "./Header.css";
import { Search as SearchIcon } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer/DataLayer";

const Header = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs or Playlists"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
