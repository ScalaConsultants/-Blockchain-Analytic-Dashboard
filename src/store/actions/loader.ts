import { ActionType } from "../../types";

export const LOADER_STATE = "LOADER_STATE";
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const showLoader = (): ActionType => ({
  type: SHOW_LOADER
});

export const hideLoader = (): ActionType => ({
  type: HIDE_LOADER
});
