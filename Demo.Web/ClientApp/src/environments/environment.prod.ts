import { IApiUrls } from 'src/app';

export const environment = {
  production: true
};
export const domainPath = '/'; // >> api ip-address domain in production

export class ApiUrls implements IApiUrls {
  terms = domainPath + 'api/terms/';
}
