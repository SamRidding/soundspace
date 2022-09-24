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
    <Dropdown className={`ml-auto px-3`} drop="left">
      <Dropdown.Toggle as={EditBtn} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
