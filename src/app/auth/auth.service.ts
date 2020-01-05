import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';



@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name === 'admin' && password === 'admin');

    return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
