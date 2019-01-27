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

export type AuthActions = Login;
