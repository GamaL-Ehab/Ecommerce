import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { Observable } from 'rxjs';
import { authRes } from '../../Interfaces/res/auth-res';
import { loginData, registerData } from '../../Interfaces/data/login-data';
import { VerifyTokenRes } from '../../Interfaces/res/verify-token-res';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:WritableSignal<string | null> = signal<string | null>(null);

  constructor(private _HttpClient:HttpClient) { 
    if(typeof localStorage !== 'undefined'){
      if(localStorage.getItem('token')){
        this.token.set(localStorage.getItem('token') || '');
      }else{
        this.token.set(null)
      }
    }
  }

  login(data:loginData):Observable<authRes>{
    return this._HttpClient.post<authRes>(`${baseUrl}/api/v1/auth/signin`, data)
  }

  register(data:registerData):Observable<authRes>{
    return this._HttpClient.post<authRes>(`${baseUrl}/api/v1/auth/signin`, data)
  }

  verifyToken():Observable<VerifyTokenRes>{
    return this._HttpClient.get<VerifyTokenRes>(`${baseUrl}/api/v1/auth/verifyToken`);
  }

  forgotPass(data:object):Observable<authRes>{
    return this._HttpClient.post<authRes>(`${baseUrl}/api/v1/auth/forgotPasswords`, data)
  }

  resetCode(data:object):Observable<authRes>{
    return this._HttpClient.post<authRes>(`${baseUrl}/api/v1/auth/verifyResetCode`, data)
  }

  resetPassword(data:object):Observable<authRes>{
    return this._HttpClient.put<authRes>(`${baseUrl}/api/v1/auth/resetPassword`, data)
  }

  changePassword(data:object):Observable<authRes>{
    return this._HttpClient.put<authRes>(`${baseUrl}/api/v1/users/changeMyPassword`, data);
  }

}
