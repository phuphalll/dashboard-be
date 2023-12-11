class Exception {
  errorCode: string = "";
  errorDescription: string = "";
  params: any;

  constructor(errorCode, errorDescription, params?) {
    this.errorCode = errorCode;
    this.errorDescription = errorDescription;
    this.params = params;
  }
}

export default Exception;
