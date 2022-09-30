import { Email } from '../../../shared/domain/value-object/Email';
import { InvalidArgumentError } from '../../../shared/domain/value-object/InvalidArgumentError';

export class UserEmail extends Email {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan120Characters(value);
  }

  private ensureLengthIsLessThan120Characters(value: string): void {
    if (value && value.length > 120) {
      throw new InvalidArgumentError(`The User Email <${value}> has more than 120 characters`);
    }
  }
}
