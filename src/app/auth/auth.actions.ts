import { User } from './../model/user.model';
import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Login] Load Auths',
  LogoutAction = '[Logout] Load Auths'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: User}) {

  }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
