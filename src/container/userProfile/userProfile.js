import React, { Component } from "react";
import { connect } from "react-redux";
import { AiFillCamera } from "react-icons/ai";
import MaleLogo from "../../components/Logo/maleLogo";
import FemaleLogo from "../../components/Logo/femaleLogo";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import classes from "./userProfile.module.css";

class UserProfile extends Component {
  state = {
    image: null,
  };
  render() {
    return (
      <React.Fragment>
        <NavigationItems />
        <div className={classes.profileSet}>
          <div className={classes.profilePic}>
            {this.props.profileGender ? <MaleLogo /> : <FemaleLogo />}
          </div>
          <div>
            <form>
              <input name="sugam" type="file" />
              <label
                htmlFor="filePicker"
                style={{ background: "grey", padding: "5px 10px" }}
              >
                My custom choose file label
              </label>
              <input
                id="filePicker"
                style={{ visibility: "hidden" }}
                type={"file"}
              ></input>
              <div>
                <AiFillCamera />
              </div>
            </form>
          </div>
        </div>
        <div>Here is the profile</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileGender: state.userDetail.userDetailGender == "male",
  };
};

export default connect(mapStateToProps)(UserProfile);
