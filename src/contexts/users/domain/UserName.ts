import { InvalidArgumentError } from '../../../shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../shared/domain/value-object/StringValueObject';

export class UserName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan60Characters(value);
  }

  private ensureLengthIsLessThan60Characters(value: string): void {
    if (value && value.length > 60) {
      throw new InvalidArgumentError(`The User Name <${value}> has more than 60 characters`);
    }
  }
}
