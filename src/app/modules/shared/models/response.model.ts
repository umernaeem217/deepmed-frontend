export class Response<T>{
    public data?: T;
    public statusCode: number = 200;
    public message: string = '';
    public date: Date = new Date();
}