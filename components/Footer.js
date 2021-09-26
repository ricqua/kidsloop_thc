import React, { useState } from "react";
import Popup from "./Popup";
import { Icon, InlineIcon } from "@iconify/react";
// import roundBrightness7 from "@iconify-icons/ic/round-brightness-7";

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";


export default function Footer() {
  const [popup, setPopup] = useState({ contentID: "", status: false });
  const router = useRouter();

  const { t } = useTranslation();

  function handleClick(e) {
    setPopup({ contentID: e.target.id, status: true });
  }

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router, router, { locale });
  };

  return (
    <React.Fragment>
      <section className="footerComponent">
        <div className="footerComponent__darkMode">
          {/* <Icon
            icon={roundBrightness7}
            width="20px"
            alt="Toggle dark mode"
            color="#444"
          /> */}
          <span className="footerComponent__darkModeToolTipText">L/D</span>
        </div>

        <select
          onChange={changeLanguage}
          className="footerComponent__selectLanguage" 
        >
            {/* <option value="" disabled selected hidden>
              Select Language
            </option> */}
            <option value="en">English</option>
            <option value="kr">한국어</option>
        </select>

        <div className="footerComponent__disclaimers">
          <a id="Help" onClick={handleClick}>
            Help
          </a>
          <a id="Privacy" onClick={handleClick}>
            Privacy
          </a>
          <a id="Terms" onClick={handleClick}>
            Terms
          </a>
          <Popup
            trigger={popup.status}
            setTrigger={setPopup}
            contentID={popup.contentID}
          />
        </div>
        
      </section>
    </React.Fragment>
  );
}
