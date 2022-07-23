import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { catchError, map, Observable } from "rxjs";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private spinner: NgxSpinnerService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();
        return next.handle(request).pipe(catchError((error)=>{
            this.spinner.hide();
            return error;
        })).pipe((event: any)=>{
            this.spinner.hide();
            return event;
        })
    }
}