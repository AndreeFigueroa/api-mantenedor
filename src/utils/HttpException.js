

class HttpException extends Error {

  constructor(httpStatus, code, message){
    super(message);
    this.httpStatus = httpStatus;
    this.exception = {
      code: code ? code.toString() : '',
      message: message || '',
      details: undefined
    };
  }

  addDetail(field, value) {

    if (this.exception.details === undefined) {
      this.exception.details = [];
    }

    this.exception.details.push({
      field: field,
      value: value
    });

    return this;
  }

  toString() {
    if (this.exception.details === undefined) {
      return `${this.httpStatus} - ${this.exception.message}`;
    } else {
      let data = [];
      for (let d of this.exception.details) {
        data.push(`${d.field}: ${d.value}`);
      }
      return `${this.httpStatus} - ${this.exception.message}, details: ${data.join(', ')}`;
    }
  }
}

class BadRequestException extends HttpException {
  constructor(code, message){
    super(400, code, message);
  }
}

class ForbiddenException extends HttpException {
  constructor(code, message){
    super(403, code, message);
  }
}

class NotFoundException extends HttpException {
  constructor(code, message){
    super(404, code, message);
  }
}

class UnprocessableEntityException extends HttpException {
  constructor(code, message){
    super(422, code, message);
  }
}

class InternalErrorException extends HttpException {
  constructor(code, message){
    super(500, code, message);
  }
}

class BadGatewayException extends HttpException {
  constructor(code, message){
    super(502, code, message);
  }
}

export {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UnprocessableEntityException,
  InternalErrorException,
  BadGatewayException
};
