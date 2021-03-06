import React from "react";
import {
  useHistory
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export { HomeButton };

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon className="block m-5" icon={faChevronLeft} />
    </button>
  );
}