import React, { useState } from "react";
import Popup from "./Popup";
import { Icon, InlineIcon } from "@iconify/react";
import { useRouter } from "next/router";
  
export default function Footer() {
  const [popup, setPopup] = useState({ contentID: "", status: false });
  const router = useRouter();

  function handleClick(e) {
    setPopup({ contentID: e.target.id, status: true });
  }

  function changeLanguage (e) {
    const locale = e.target.value;
    router.push(router, router, { locale });
  };


  return (
    <React.Fragment>
      <section className="footerComponent">

          {true ? <Icon
            className="footerComponent__darkMode"
            icon="ic:round-brightness-3"
            width="20px"
            alt="Toggle dark mode"
            color="#444"
          /> :
          <Icon
            className="footerComponent__darkMode"
            icon="ic:round-brightness-7"
            width="20px"
            alt="Toggle dark mode"
            color="#444"
          />}

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

