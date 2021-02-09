import React, { useState } from "react";
import AccountDownVal from "../../../components/AccountDownVal/AccountDownVal";
import Navigation from "./NavigationItem/NavigationItem";
import MainLogo from "../../Logo/mainLogo";
import classes from "./NavigationItems.module.css";
import AccountModal from "../../UI/Modal/AccountModal";
import { HiBell } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineShop } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { SiYoutubetv } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavigationItems = (props) => {
  const [searchClicked, isSearchClicked] = useState(false);
  const [accountClicked, isAccountClicked] = useState(false);
  const useId = localStorage.getItem("userId");

  return (
    <React.Fragment>
      <div className={classes.container}>
        <ul className={classes.Ul}>
          <div className={classes.left}>
            <Link to="/main">
              <MainLogo />
            </Link>
            <div
              className={classes.search}
              onClick={() => isSearchClicked(true)}
            >
              {searchClicked ? null : (
                <AiOutlineSearch
                  className={classes.searchSign}
                  color="grey"
                  size="1.5em"
                />
              )}
              <input
                style={
                  searchClicked
                    ? null
                    : {
                        "::placeholder": {
                          padding: "1px",
                        },
                      }
                }
                className={classes.searchInput}
                type="text"
                placeholder="Search Facebook"
              />
            </div>
          </div>
          <IconContext.Provider value={{ color: "black", size: "2em" }}>
            <div className={classes.middle}>
              <div className={classes.middleValues}>
                <Navigation to="/main" title="Home">
                  <AiFillHome />
                </Navigation>
              </div>
              <div className={classes.middleValues}>
                <Navigation to="/watch" title="Watch">
                  <SiYoutubetv />
                </Navigation>
              </div>

              <div className={classes.middleValues}>
                <Navigation to="/marketplace" title="Marketplace">
                  <AiOutlineShop />
                </Navigation>
              </div>
              <div className={classes.middleValues}>
                <Navigation to="/groups" title="Groups">
                  <GrGroup />
                </Navigation>
              </div>
              <div className={classes.middleValues}>
                <Navigation to="/gaming" title="Gaming">
                  <IoGameControllerOutline />
                </Navigation>
              </div>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <div className={classes.Right}>
              <div className={classes.rightValues}>
                <Navigation to={"/" + useId}>PROFILE</Navigation>
              </div>
              <div className={classes.rightValues}>
                <IoMdAdd />
              </div>
              <div className={classes.rightValues}>
                <FaFacebookMessenger />
              </div>
              <div className={classes.rightValues}>
                <HiBell />
              </div>

              <div
                className={classes.rightValues}
                onClick={() => isAccountClicked(!accountClicked)}
              >
                <BsFillCaretDownFill title="Account" />
              </div>
            </div>
          </IconContext.Provider>
        </ul>
      </div>

      {accountClicked && (
        <AccountModal show={accountClicked}>
          <AccountDownVal {...props} />
        </AccountModal>
      )}
    </React.Fragment>
  );
};

export default NavigationItems;
