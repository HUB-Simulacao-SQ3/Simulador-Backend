class ResponseModel<T = any>  {
  public success: boolean = false;
  public data: T = {} as T;
  public messagesError: string[] = [] as string[];
  public error: string[] = [] as string[];

  public constructor(data: T, success: boolean, messagesError: string[], error?: any) {
    this.data = data;
    this.success = success;
    this.messagesError = messagesError;
    this.error = error;
  }

}

export { ResponseModel };
