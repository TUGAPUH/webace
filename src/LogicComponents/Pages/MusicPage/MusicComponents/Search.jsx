import React, { useEffect, useState } from "react";
import searchIcon from "../img/search.svg";
import style from "../music.module.scss";

export const Search = ({ musicList, setSortedMusicList }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue !== "") {
      setSortedMusicList(
        musicList.filter((el) => {
          return (
            el.nameOfSong.toLowerCase().includes(searchValue.toLowerCase()) ||
            el.author.toLowerCase().includes(searchValue.toLowerCase())
          );
        })
      );
    } else {
      setSortedMusicList(null);
    }
  }, [searchValue]);
  return (
    <div className={style.search}>
      <img src={searchIcon} alt="SearchIcon" />
      <div className={style.inputContainer}>
        <input
          id="search"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <div className={style.botttomLine} />
        <label htmlFor="search">Search</label>
      </div>
    </div>
  );
};
