import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
import {SweetAlertOptions, SweetAlertResult} from 'sweetalert2';

@Injectable({
    providedIn: 'root',
  })
export class AlertService{

    constructor(){}

    open(options: SweetAlertOptions<any, any>): Promise<SweetAlertResult<any>>{
        return Swal.fire(options)
    }

    success(message: string){
        return this.open({
            title: 'Success',
            icon: "success",
            text: message,
            heightAuto: false,
        });
    }

    error(message: string){
        return this.open({
            title: 'An error has occured.',
            icon: "error",
            text: message,
            heightAuto: false,
        });
    }

}