import React, { Component } from "react";
import classes from "./ProfileFill.module.css";
import { ImCross } from "react-icons/im";
import { IoAdd } from "react-icons/io5";
import { GiStickFrame } from "react-icons/gi";
import { FaPen } from "react-icons/fa";

class ProfileFill extends Component {
  state = {
    image: null,
    url: "",
  };

  handleChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState(() => ({
        image,
      }));
    }
  };
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.profileTop}>
          <div className={classes.Para}>Update profile picture</div>
          <div className={classes.CancelSign}>
            <ImCross />
          </div>
        </div>
        <hr />
        <div className={classes.uploadSection}>
          <label htmlFor="filePicker" className={classes.uploadPhoto}>
            <div>
              <div className={classes.pluseSign}>
                <IoAdd />
              </div>
              Upload Photo
              <input
                onChange={(e) => this.handleChange(e)}
                type="file"
                id="filePicker"
                className={classes.dispUpload}
              />
            </div>
          </label>

          <div className={classes.AddFrame}>
            <div className={classes.frameSign}>
              <GiStickFrame />
            </div>
            <div className={classes.frameUpload}>Add Frame</div>
          </div>

          <div className={classes.editThumbnail}>
            <FaPen />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFill;
