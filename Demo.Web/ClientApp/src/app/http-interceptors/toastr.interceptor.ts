import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class ToastrInterceptor implements HttpInterceptor {
    constructor(private toastrService: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const method = req.method;
        return next.handle(req).pipe(
            tap(event => {
                if (method !== 'GET') {
                    if (event instanceof HttpResponse) {
                        if (event.body.success) {
                            this.toastrService.success(event.body.message);
                        } else {
                            this.toastrService.error(event.body.message);
                        }
                    }
                }
            }, error => {
                this.toastrService.error('Error: please try again');
            }));
    }
}