import React, { useState } from "react";

import { LokiModal } from "./LokiModal";
import { LokiPropagator } from "./LokiPropagator";
import styles from "./LokiZone.module.scss";

// const lokiImage = {
//   src: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/125223273_10214445225524286_7354193883580040641_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cT6d6Rs7x8MAX8Hp_rh&_nc_ht=scontent-atl3-1.xx&oh=c0b1fdd34190a78ca6cb49ffd9be3600&oe=6152740D",
//   alt: "MyBoy!!",
// };

const LokiZone = () => {
  const [showModal, setShowModal] = useState(true);
  const [lokis, setLokis] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const showLokis = () => {
    closeModal();
    setLokis(true);
  };

  return (
    <div className={styles.lokiPage}>
      <LokiModal
        isVisible={showModal}
        closeModal={closeModal}
        key={"lokiModal"}
        setShowLokis={showLokis}
      />
      {!showModal && lokis && <LokiPropagator />}
    </div>
  );
};

export default LokiZone;
