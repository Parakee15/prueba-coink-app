import { Injectable } from '@angular/core';

import * as CryptoJs from 'crypto-js';
import * as TripleDes from 'crypto-js/tripledes';
import * as EncHex from 'crypto-js/enc-hex';
import * as Md5 from 'crypto-js/md5';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  public encrypt(serializedJson: string, key: string): string {
    const encryptedArray = CryptoJs.enc.Utf8.parse(serializedJson);
    const keyHash = this._getKeyHash(key);
    const payload = TripleDes.encrypt(encryptedArray, keyHash, {
      mode: CryptoJs.mode.ECB, padding:
        CryptoJs.pad.Pkcs7
    });
    return payload.ciphertext.toString(CryptoJs.enc.Base64);
  }

  public decrypt(payload: string, key: string): string {
    const encryptedArray = CryptoJs.enc.Base64.parse(payload);
    const keyHash = this._getKeyHash(key);
    const serializedJson = TripleDes.decrypt({ ciphertext: encryptedArray }, keyHash, {
      mode: CryptoJs.mode.ECB,
      padding: CryptoJs.pad.Pkcs7
    });
    return serializedJson.toString(CryptoJs.enc.Utf8);
  }

  private _getKeyHash(key: string) {
    let securityKeyArray = Md5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);
    return EncHex.parse(securityKeyArray);
  }
}
