import api from '../../utils/api';
import { RolesEntity } from './roles.entity';

export class RolesService {
  static findAll() {
    return api.get('/roles')
      .then(data => data.map(i => new RolesEntity(i)));
  }
}
