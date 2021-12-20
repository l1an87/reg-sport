import api from "../../utils/api";
import { SportTypeEntity } from "./sport-type.entity";

export class SportTypeService {
  static findAll() {
    return api.get('/sport-type').then(data => data.map(i => new SportTypeEntity(i)));
  }

  static findById(id) {
    return api.get(`/sport-type/${id}`).then(i => new SportTypeEntity(i));
  }

  static remove(id) {
    return api.del('/sport-type', id);
  }

  static create(data) {
    data.limit = +data.limit || 0;
    return api.post('/sport-type', data);
  }

  static update(id, data) {
    data.limit = +data.limit || 0;
    return api.patch('/sport-type', id, data);
  }
}
