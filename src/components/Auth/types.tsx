import { ReactElement } from "react";

export interface AuthPropsTypes {
    authCheck: () => void,
    children: ReactElement
}