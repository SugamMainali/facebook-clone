import React, { Component } from "react";
import { connect } from "react-redux";
import { AiFillCamera } from "react-icons/ai";
import MaleLogo from "../../components/Logo/maleLogo";
import FemaleLogo from "../../components/Logo/femaleLogo";
import classes from "./userProfile.module.css";
import ProfileClick from "../../components/UI/Modal/profileClick";
import ProfileSelect from "../../components/UI/Modal/ProfileSelect";
import ProfileFill from "../userProfile/profileFill/ProfileFill";

class UserProfile extends Component {
  state = {
    imageClicked: false,
    cameraClicked: false,
  };
  cancelCamerClick = () => {
    this.setState({
      cameraClicked: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={classes.profileSet}>
          <div className={classes.holder}>
            <div
              className={classes.profilePic}
              onClick={() =>
                this.setState({
                  imageClicked: !this.state.imageClicked,
                })
              }
            >
              {this.props.profileGender ? <MaleLogo /> : <FemaleLogo />}
            </div>
            <div
              className={classes.Camera}
              onClick={() =>
                this.setState({
                  cameraClicked: !this.state.cameraClicked,
                })
              }
            >
              <AiFillCamera size="1.5em" />
            </div>
          </div>
          <div className={classes.imageClickedBox}>
            {this.state.imageClicked && (
              <ProfileClick show={!this.imageClicked}></ProfileClick>
            )}
          </div>
          <div
            className={classes.cameraClickedBox}
            style={{
              display: this.state.cameraClicked ? "block" : "none",
            }}
          >
            {this.state.cameraClicked && (
              <ProfileSelect
                showVal={!this.cameraClicked}
                cancelVal={this.cancelCamerClick}
              >
                <ProfileFill />
              </ProfileSelect>
            )}
          </div>
        </div>
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

// <div>
//             <form>
//               <input name="sugam" type="file" />
//               <label
//                 htmlFor="filePicker"
//                 style={{ background: "grey", padding: "5px 10px" }}
//               >
//                 My custom choose file label
//               </label>
//               <input
//                 id="filePicker"
//                 style={{ visibility: "hidden" }}
//                 type={"file"}
//               ></input>
//             </form>
//           </div>
