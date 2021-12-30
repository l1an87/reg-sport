import api from '../../utils/api';
import { UsersEntity } from './users.entity';

export class UsersService {
  static findAll() {
    return api.get('/users').then(data => data.map(i => new UsersEntity(i)));
  }

  static findById(id) {
    return api.get(`/users/${id}`).then(i => new UsersEntity(i));
  }

  static ban(id) {
    return api.get(`/users/ban/${id}`).then(i => new UsersEntity(i));
  }

  static remove(id) {
    return api.del('/users', id);
  }

  static create(data) {
    return api.post('/users', data);
  }

  static update(id, data) {
    const {
      password,
      ...currentData
    } = data;
    if (password) {
      currentData.password = password;
    }
    return api.patch('/users', id, currentData);
  }
}
