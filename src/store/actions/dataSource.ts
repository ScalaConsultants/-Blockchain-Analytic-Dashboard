import { DataSourceActionType } from "../../types";

export const SET_DATA_SOURCE = "SET_DATA_SOURCE";

export const SetDataSource = (source: string): DataSourceActionType => ({
    type: SET_DATA_SOURCE,
    source: source
});
