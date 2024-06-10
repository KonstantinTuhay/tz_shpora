import React from "react";
import {
  YoutubeOutlined,
  InstagramOutlined,
  XOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import YouTubeMedia from "./YouTubeMedia";
import InstagramMedia from "./InstagramMedia";
import TwitterMedia from "./TwitterMedia";
import FacebookMedia from "./FacebookMedia";

const SocialMediaIcons = () => {
  return (
    <>
      <YouTubeMedia YoutubeOutlined={YoutubeOutlined} />
      <InstagramMedia InstagramOutlined={InstagramOutlined} />
      <TwitterMedia XOutlined={XOutlined} />
      <FacebookMedia FacebookOutlined={FacebookOutlined} />
    </>
  );
};

export default SocialMediaIcons;
