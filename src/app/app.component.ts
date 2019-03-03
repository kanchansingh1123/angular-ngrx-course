import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers/index';
import { Logout } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut} from './auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  isLoggedOut$: Observable<boolean>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
      // this.store.subscribe(state => console.log(state));

      // this.store
      // .pipe(
      //   // map(state => state['auth'].loggedIn)
      //   map(state => state['auth'].loggedIn)
      // )
      // .subscribe(state => console.log(state));

      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );
    }

    logout() {
      this.store.dispatch(new Logout());
    }
}
