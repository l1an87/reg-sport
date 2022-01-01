import api from '../../utils/api';
import { TeamsEntity } from './teams.entity';

export class TeamsService {
  static findAll() {
    return api.get('/teams').then(data => data.map(i => new TeamsEntity(i)));
  }

  static findById(id) {
    return api.get(`/teams/${id}`).then(i => new TeamsEntity(i));
  }

  static remove(id) {
    return api.del('/teams', id);
  }

  static create(data) {
    return api.post('/teams', data);
  }

  static update(id, data) {
    return api.patch('/teams', id, data);
  }

  static addMedicalCertificate(id, file) {
    const data = new FormData();
    data.set('file', file);
    return api.post(`/teams/add-medical-certificate/${id}`, data);
  }

  static report(id, name) {
    return api.file(`/reports/team/${id}`, name);
  }
}
