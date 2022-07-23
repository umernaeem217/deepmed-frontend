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

    error(message: string){
        return this.open({
            title: 'An error has occured.',
            icon: "error",
            text: message,
            heightAuto: false,
        });
    }

}