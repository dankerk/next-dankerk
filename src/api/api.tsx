import axios from 'axios';
import { AxiosObservable } from 'axios-observable';
import { from, Observable } from 'rxjs';
import { CreateUserPayload } from '../models/api/users.model';
import { getAppConfig } from '../services/app-config.service';
import { addAuthenticationInterceptor } from './authentication/authentication.interceptor';
import firebase from 'firebase';
import { switchMap, tap } from 'rxjs/operators';

const { base } = getAppConfig().api;

export class Api {
  private authToken = '';

  authenticateUser({ email, password }: { email: string, password: string }): Observable<string> {
    return from(firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
      switchMap(() => firebase.auth().currentUser!.getIdToken()),
      tap((response) => {
        addAuthenticationInterceptor(axios, { uid: response });
      })
    );
  }

  getUserList(): Observable<any> {
    return from(axios.get(`${base}/users`));
  }

  createUser(user: CreateUserPayload): AxiosObservable<{ uid: string }> {
    return from(axios.post(`${base}/users`, user));
  }
}