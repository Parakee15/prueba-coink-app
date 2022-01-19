// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'https://api.bancoink.biz/qa/signup/';

export const environment = {
  production: false,
  apiKey: '030106',
  keyEncript: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIwMzAxMDYiLCJWZXJzaW9uIjoiMS4wLjAifQ.OJ7pEEf3b0tPHwdWIn7-v18tYnMeYhTU9UT8zDSEtrg',
  sendSmsVerificationNumber: `${BASE_URL}sendSmsVerificationNumber`,
  documentTypes: `${BASE_URL}documentTypes`,
  genders: `${BASE_URL}genders`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
