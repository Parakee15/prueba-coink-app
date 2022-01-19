import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { EncryptService } from './encrypt.service';
import { environment as ENV } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private _httpParams: HttpParams;

  constructor(
    private _httpClient: HttpClient,
    private _encryptService: EncryptService
  ) {
    this._httpParams = new HttpParams().append('apiKey', ENV.apiKey);
  }

  public getDocumentTypes(): Observable<any> {
    return this._httpClient.get(ENV.documentTypes, { params: this._httpParams });
  }

  public getGenders(): Observable<any> {
    return this._httpClient.get(ENV.genders, { params: this._httpParams });
  }

  public sendSmsVerificationNumber(json: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const encryptData = this._encryptService.encrypt(JSON.stringify(json), ENV.keyEncript);
      const request = this._httpClient.post(ENV.sendSmsVerificationNumber, { payload: encryptData }, { params: this._httpParams });
      request.subscribe(
        (res: any) => resolve(this._encryptService.decrypt(res.payload, ENV.keyEncript)),
        (err: any) => reject(this._encryptService.decrypt(err.payload, ENV.keyEncript))
      );
    });
  }

}
