import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Dropdown.module.css";
import { useHistory } from "react-router-dom";

const EditBtn = React.forwardRef(({ onClick }, ref) => (
  <i
    class="fas fa-edit"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();

  return (
    <div></div>
  );
};
