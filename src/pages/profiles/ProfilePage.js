import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContexts";
import styles from "../../styles/ProfilePage.module.css";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();

  return (
    <div className={styles.PPcontain}>
      <div className={styles.PPflex}>
        <div className={styles.PPleft}>
          <div className={styles.PPuser}>
            <p>User img/name</p>
          </div>
          <div className={styles.PPtracks}>Tracks</div>
        </div>
        <div className={styles.PPright}>User info, track likes.</div>
      </div>
    </div>
  );
}

export default ProfilePage;
