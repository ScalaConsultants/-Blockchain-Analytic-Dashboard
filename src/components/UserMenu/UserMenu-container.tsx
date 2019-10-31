import React from 'react';
import { Link } from 'react-router-dom';

import useUserMenuStyles from './UserMenu-styles';

const UserMenu = (): React.ReactElement => {

    const menuItems = [
        { title: "wallet list", link: '/wallets-list', handleClick: () => console.log('Menu item clicked'), position: 'top' },
        { title: "top list", link: '/wallets-list', handleClick: () => console.log('Menu item clicked'), position: 'top' },
        { title: "settings", link: '/wallets-list', handleClick: () => console.log('Menu item clicked'), position: 'bottom' },
        { title: "account", link: '/wallets-list', handleClick: () => console.log('Menu item clicked'), position: 'bottom' },
        { title: "log out", link: '/wallets-list', handleClick: () => console.log('Menu item clicked'), position: 'bottom' },
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
            {menuItems.map((item, index: number) =>
                item.position == 'top'
                &&
                <div className={classes.menuItemContainer} key={index}>
                    <Link to={item.link}>
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
                    <span className={classes.menuItem} onClick={item.handleClick}>
                        {item.title}
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
