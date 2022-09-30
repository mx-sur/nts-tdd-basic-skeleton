import { InvalidArgumentError } from './InvalidArgumentError';
import { StringValueObject } from './StringValueObject';

export class Email extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.checkEmailIsValid(value);
  }

  checkEmailIsValid(email: string) {
    const regex =
      // tslint:disable-next-line: ter-max-len
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${email}>`);
    }
  }
}
