import React from "react";
import styles from "../../styles/ProfilePage.module.css";

function ProfilePage() {
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
