export interface HttpResponse<T>{
    statusCode: number;
    body: T | string;
}

export interface HttpRequest<T>{
    params?: T;
    headers?: T;
    body?: T;
}