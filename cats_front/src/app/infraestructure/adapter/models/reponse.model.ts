export class ResponseModel<T> {
  statusCode!: number
  message!: string
  data!: T
}
