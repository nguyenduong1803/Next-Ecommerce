export interface CommonResponse<D = any> {
  data: D | null;
  httpStatusCode: number;
  message: string | null;
}
