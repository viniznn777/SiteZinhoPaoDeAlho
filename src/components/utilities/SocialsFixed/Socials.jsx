import React from "react";
import SocialsFixed from "./Styles";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

const Socials = () => {
  return (
    <SocialsFixed>
      <a
        href="http://google.com"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <button>
          <BsFacebook />
        </button>
      </a>
      <a
        href="http://google.com"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <button>
          <BsInstagram />
        </button>
      </a>
      <a
        href="http://google.com"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <button>
          <BsYoutube />
        </button>
      </a>
      <a
        href="http://google.com"
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <button>
          <BsLinkedin />
        </button>
      </a>
    </SocialsFixed>
  );
};

export default Socials;
