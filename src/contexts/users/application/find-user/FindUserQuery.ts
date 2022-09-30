import { Query } from '../../../../shared/domain/Query';

export class FindUserQuery implements Query {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}
