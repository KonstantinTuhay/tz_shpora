import React, { Fragment } from "react";
import { Button, Switch, Modal } from "antd";
import "../App.css";

import DarkLightMode from "./right_side/DarkLightMode";
import ButtonAuthorization from "./right_side/ButtonAuthorization";
import ButtonRegistration from "./right_side/ButtonRegistration";
import SocialMediaIcons from "./social_media/SocialMediaIcons";

const MainHeader = () => {
  return (
    <Fragment className="h_hfr">
      <div className="social_media">
        <SocialMediaIcons />
      </div>

      <h1>React простыми словами</h1>

      {/* Вход в личный кабинет и регистрация*/}
      <div className="right_side">
        <DarkLightMode Switch={Switch} />

        <ButtonAuthorization Modal={Modal} Button={Button} />

        <ButtonRegistration Modal={Modal} Button={Button} />
      </div>
    </Fragment>
  );
};

export default MainHeader;
