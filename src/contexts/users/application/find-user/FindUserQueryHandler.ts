import { Query } from '../../../../shared/domain/Query';
import { QueryHandler } from '../../../../shared/domain/QueryHandler';
import { UserId } from '../../domain/UserId';
import { UserResponse } from '../UserResponse';
import { FindUser } from './FindUser';
import { FindUserQuery } from './FindUserQuery';

export class FindUserQueryHandler implements QueryHandler<FindUserQuery, UserResponse> {
  constructor(private finder: FindUser) {}
  subscribedTo(): Query {
    return FindUserQuery;
  }
  handle(query: FindUserQuery): Promise<UserResponse> {
    const userId = new UserId(query.id);
    return this.finder.run(userId);
  }
}
