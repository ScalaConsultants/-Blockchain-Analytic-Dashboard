import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import useUserMenuStyles from './UserMenu-styles';
import { menuItem } from './types';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const UserMenu = (): React.ReactElement => {
    const [menuVisibility, setMenuVisibility] = React.useState(false);

    const menuItems: menuItem[] = [
        { title: "wallet list", link: '/wallets-list', handleClick: () => handleMenuState(), position: 'top' },
        { title: "top list", link: '/top-list', handleClick: () => handleMenuState(), position: 'top' },
        { title: "settings", link: '/settings', handleClick: () => handleMenuState(), position: 'bottom' },
        { title: "account", link: '/account', handleClick: () => handleMenuState(), position: 'bottom' },
        { title: "log out", link: '/logout', handleClick: () => handleMenuState(), position: 'bottom' },
    ];

    const node = useRef<HTMLDivElement>(null);

    const handleMenuState = () => {
        setMenuVisibility(prevState => !prevState)
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (node.current != null)
            if (node.current.contains(e.target as HTMLInputElement))
                return;
        setMenuVisibility(false)
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const classes = useUserMenuStyles();

    return (
        <>
            {menuVisibility ?
                <ArrowDropUpIcon color="secondary" className={classes.pointer} onClick={handleMenuState} />
                :
                <ArrowDropDownIcon color="secondary" className={classes.pointer} onClick={handleMenuState} />
            }
            {menuVisibility &&
                <div className={classes.container} ref={node}>
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
            }
        </>
    );
};

export default UserMenu;
