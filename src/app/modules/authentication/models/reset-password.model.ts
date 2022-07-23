export interface ResetPasswordDto{
    password: string;
    identity: string;
    code: string;
}