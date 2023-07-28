export interface HttpResponse<T> {
    statusCode: HttpStatusCode;
    body: T | string;
  }
  
  export interface HttpRequest<B> {
    params?: unknown;
    headers?: unknown;
    body?: B;
  }
  
  export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500,
  }
  
  export interface IController {
    handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
  }