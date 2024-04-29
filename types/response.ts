export interface IResponse<T> {
  statusCode: number;
  message: string;
  payload: T;
  errors: ResponseError[] | [];
}

interface ResponseError {
  entity: string;
  property: string;
  children: string[];
  constraints: object;
}
