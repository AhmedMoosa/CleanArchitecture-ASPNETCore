import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS, IApiUrls } from '..';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  private baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject(API_URLS) urls: IApiUrls) {
    this.baseUrl = urls.terms;
  }

  getAll(page = 0): Observable<any> {
    return this.http.get<any>(this.baseUrl, {
      params: {
        'currentPage': page + ''
      }
    });
  }

  find(id): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  create(term): Observable<any> {
    return this.http.post(this.baseUrl, term);
  }

  update(id, term): Observable<any> {
    return this.http.put(this.baseUrl + id, term);
  }

  delete(id): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
