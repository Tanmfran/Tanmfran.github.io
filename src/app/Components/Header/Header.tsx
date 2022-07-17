import React from "react";

import { IconHolder } from "../IconHolder/IconHolder";

import styles from "./Header.module.scss";

export const Header = () => {
  // const headerData = {
  //   src: "https://cdn.iconscout.com/icon/premium/png-512-thumb/t-letter-1-840447.png",
  //   alt: "T-Initial",
  // };

  return (
    <div className={styles.header}>
      <IconHolder text={"Tannor Franks"} />
    </div>
  );
};

export default Header;
