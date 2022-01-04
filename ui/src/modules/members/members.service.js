import api from '../../utils/api';
import { MembersEntity } from "./members.entity";

export class MembersService {
  static findAll() {
    return api.get('/members').then(data => data.map(i => new MembersEntity(i)));
  }
  static findByTeamId(id) {
    return api.get(`/members/team/${id}`).then(data => data.map(i => new MembersEntity(i)));
  }

  static findById(id) {
    return api.get(`/members/${id}`).then(i => new MembersEntity(i));
  }

  static admitted(id) {
    return api.get(`/members/admitted/${id}`).then(i => new MembersEntity(i));
  }

  static remove(id) {
    return api.del('/members', id);
  }

  static create(data) {
    return api.post('/members', data);
  }

  static update(id, data) {
    return api.patch('/members', id, data);
  }

  static addMedicalCertificate(id, file) {
    const data = new FormData();
    data.set('file', file);
    return api.post(`/members/add-medical-certificate/${id}`, data);
  }

  static addPhoto(id, file) {
    const data = new FormData();
    data.set('file', file);
    return api.post(`/members/add-photo/${id}`, data);
  }

  static report(name) {
    return api.file(`/reports/sports`, name);
  }

  static membersReport(name) {
    return api.file(`/reports/members-sports`, name);
  }
}
