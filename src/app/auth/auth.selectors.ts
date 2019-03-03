import { createSelector } from "@ngrx/store";

export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState, // selectors

    // projector function
    (auth) => auth.loggedIn
)

export const isLoggedOut = createSelector(
    isLoggedIn, // selectors

    // projector function
    isLogged => !isLogged
)