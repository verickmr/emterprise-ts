export interface HttpResponse<T>{
    statusCode: number;
    body: T | string;
}

export interface HttpRequest<T>{
    params?: T;
    headers?: T;
    body?: T;
}

export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
}

export interface IController{
    handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>
}