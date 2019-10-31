import React from 'react';
import { Link } from 'react-router-dom';

import useUserMenuStyles from './UserMenu-styles';
import { UserMenuProps, menuItem } from './types';

const UserMenu = (props: UserMenuProps): React.ReactElement => {
    const { handleMenuState } = props;

    const menuItems: menuItem[] = [
        { title: "wallet list", link: '/wallets-list', handleClick: () => handleMenuState(), position: 'top' },
        { title: "top list", link: '/top-list', handleClick: () => handleMenuState(), position: 'top' },
        { title: "settings", link: '/settings', handleClick: () => handleMenuState(), position: 'bottom' },
        { title: "account", link: '/account', handleClick: () => handleMenuState(), position: 'bottom' },
        { title: "log out", link: '/logout', handleClick: () => handleMenuState(), position: 'bottom' },
    ];

    const classes = useUserMenuStyles();

    return (
        <div className={classes.container}>
            <div className={classes.menuItemContainer}>
                <span className={classes.menuHeader}>
                    blockchain
                </span>
            </div>
            <hr className={classes.hr}></hr>
            {menuItems.map((item: menuItem, index: number) =>
                item.position == 'top'
                &&
                <div className={classes.menuItemContainer} key={index}>
                    <Link to={item.link} className={classes.link}>
                        <span className={classes.menuItem} onClick={item.handleClick}>
                            {item.title}
                        </span>
                    </Link>
                </div>
            )}
            <div className={classes.menuItemContainer}>
                <span className={classes.menuHeader}>
                    options
                </span>
            </div>
            <hr className={classes.hr}></hr>
            {menuItems.map((item, index: number) =>
                item.position == 'bottom'
                &&
                <div className={classes.menuItemContainer} key={index}>
                    <Link to={item.link} className={classes.link}>
                        <span className={classes.menuItem} onClick={item.handleClick}>
                            {item.title}
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
