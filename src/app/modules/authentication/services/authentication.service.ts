import { Injectable } from "@angular/core";
import { GenericService } from "../../shared/services/generic.service";
import { HttpClient } from "@angular/common/http";
import { LoginDto } from "../models/login.model";
import { LoginResponseDto } from "../models/login-response.model";
import { environment } from "src/environments/environment";
import { firstValueFrom } from "rxjs";
import { SignUpDto } from "../models/sign-up.model";
import { VerifyCodeDto } from "../models/verify-code.model";
import { ResetPasswordDto } from "../models/reset-password.model";
import { CheckResetPasswordCodeDto } from "../models/check-reset-password-code.model";

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService extends GenericService{
    private BASE_URL = environment.urls.authentication;

    constructor(http: HttpClient){
        super(http);
    }

    login(params: LoginDto){
        return firstValueFrom(this.post<LoginResponseDto>(this.BASE_URL.login,params));
    }

    signup(params: SignUpDto){
        return firstValueFrom(this.post<string>(this.BASE_URL.signup,params));
    }

    verifyEmail(params: VerifyCodeDto){
        return firstValueFrom(this.post<boolean>(this.BASE_URL.verifyEmail,params));
    }

    requestEmailVerification(userId: string){
        return firstValueFrom(this.get<string>(this.BASE_URL.requestEmailVerification+"/"+userId));
    }

    requestPasswordReset(identity: string){
        return firstValueFrom(this.get<string>(this.BASE_URL.requestResetPassword+"/"+identity));
    }

    resetPassword(params: ResetPasswordDto){
        return firstValueFrom(this.put<string>(this.BASE_URL.resetPassword,params));
    }

    checkResetPasswordCode(params: CheckResetPasswordCodeDto){
        return firstValueFrom(this.post<boolean>(this.BASE_URL.checkResetPasswordCode,params));
    }
}