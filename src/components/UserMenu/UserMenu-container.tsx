import React from 'react';

import useUserMenuStyles from './UserMenu-styles';


const UserMenu = (): React.ReactElement => {

    const menuItemsTop = [
        { title: "wallet list" },
        { title: "top list" },
    ];

    const menuItemsDown = [
        { title: "settings" },
        { title: "account" },
        { title: "log out" },
    ]


    const classes = useUserMenuStyles();

    return (
        <div className={classes.container}>
            <div className={classes.menuItemContainer}>
                <span className={classes.menuHeader}>
                    blockchain
                </span>
            </div>
            <hr className={classes.hr}></hr>
            {menuItemsTop.map((item) =>
                <div className={classes.menuItemContainer}>
                    <span className={classes.menuItem}>
                        {item.title}
                    </span>
                </div>
            )}
            <div className={classes.menuItemContainer}>
                <span className={classes.menuHeader}>
                    options
                </span>
            </div>
            <hr className={classes.hr}></hr>
            {menuItemsDown.map((item) =>
                <div className={classes.menuItemContainer}>
                    <span className={classes.menuItem}>
                        {item.title}
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
