const BASE_URL = 'https://api.bancoink.biz/qa/signup/';

export const environment = {
  production: true,
  apiKey: '030106',
  keyEncript: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIwMzAxMDYiLCJWZXJzaW9uIjoiMS4wLjAifQ.OJ7pEEf3b0tPHwdWIn7-v18tYnMeYhTU9UT8zDSEtrg',
  sendSmsVerificationNumber: `${BASE_URL}sendSmsVerificationNumber`,
  documentTypes: `${BASE_URL}documentTypes`,
  genders: `${BASE_URL}genders`
};
