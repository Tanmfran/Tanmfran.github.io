import React from 'react'
import {Link} from "react-router-dom";
import styles from './LeftNav.module.scss'

interface NavItemProps {
    header: string;
    path: string;
}

export const NavItem = (props: NavItemProps) => {
    return (
        <div className={styles.leftNavItem}>
            <Link to={`/${props.path}`}>{props.header}</Link>
        </div>
    )
}
