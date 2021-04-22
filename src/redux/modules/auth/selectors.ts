import { createSelector } from "reselect";

const getAuthNode = createSelector(
  (state: any) => state.auth,
  (authState) => authState
);

export const getUserSelector = createSelector(
  [getAuthNode],
  (authState) => authState.me
);

export const getIsLoadingUser = createSelector(
  [getAuthNode],
  (authState): Boolean => authState.isLoadingUser
);
