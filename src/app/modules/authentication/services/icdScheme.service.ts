import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { GenericService } from "../../shared/services/generic.service";
import { Response } from "../../shared/models/response.model";
import { firstValueFrom } from "rxjs";
import { Lookup } from "../../shared/models/lookup.model";

@Injectable({
    providedIn: 'root',
})
export class IcdSchemeService extends GenericService{
    private BASE_URL = environment.urls.icdScheme;

    constructor(http: HttpClient){
        super(http);
    }

    getAll(): Promise<Response<Lookup[]>>{
        return firstValueFrom(this.get<Lookup[]>(this.BASE_URL.getAll));
    }
}