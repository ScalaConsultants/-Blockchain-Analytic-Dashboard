export interface UserMenuProps {
    handleMenuState: () => void;
    isUserAuth: boolean;
}

export interface menuItem {
    title: string;
    link: string;
    position: string;
    handleClick: () => void;
}