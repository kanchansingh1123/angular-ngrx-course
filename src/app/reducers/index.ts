import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
  } from '@ngrx/store';
import { AuthActionTypes } from '../auth/auth.actions';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export interface AppState {
  auth: AuthState;
}

// function authReducer(state: AuthState, action): AuthState {
//   switch (action.type) {
//     case AuthActionTypes.LoginAction:
//       return {
//         loggedIn: true,
//         user: action.payload
//       };
//     default:
//       return state;
//   }
// }

function authReducer(state: AuthState = initialAuthState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
