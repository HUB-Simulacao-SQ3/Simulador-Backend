class ResponseModel<T = any>  {
  public success: boolean = false;
  public data: T = {} as T;
  public messagesError: string[] = [] as string[];

  public constructor(data: T, success: boolean, messagesError: string[]) {
    this.data = data;
    this.success = success;
    this.messagesError = messagesError;
  }

}

export { ResponseModel };
