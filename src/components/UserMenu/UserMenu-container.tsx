import React from 'react';

import useUserMenuStyles from './UserMenu-styles';


const UserMenu = (): React.ReactElement => {
   
    const menuItems = [
        {title:"wallet list"},
        {title:"top list"},
        {title:"settings"},
        {title:"account"},
        {title:"log out"},
    ]

    const classes = useUserMenuStyles();

    return (
       <div className={classes.container}> 
            {menuItems.map((item)=>
                <div style={{textAlign:'right', marginBottom: 12}}>
                    <span  className={classes.menuItem}>{item.title}</span>
                </div>

            )}

       </div>
    );
};

export default UserMenu;
