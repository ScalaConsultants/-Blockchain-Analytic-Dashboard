export interface menuItem {
    title: string;
    link: string;
    position: string;
    handleClick: () => void;
}

export interface UserMenuContainerProps {
    logout: () => void;
}