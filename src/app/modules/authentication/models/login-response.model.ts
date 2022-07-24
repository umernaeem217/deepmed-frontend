export interface LoginResponseDto{
    token?: string;
    isVerified: boolean;
    isOnBoarded: boolean;
    userId: string;
}