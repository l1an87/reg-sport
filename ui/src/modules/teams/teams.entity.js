import { UsersEntity } from "../users/users.entity";

export class TeamsEntity {
  id;
  name;
  user;
  file;

  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.user = data.user ? new UsersEntity(data.user) : null;
    this.file = data.file || '';
  }

  get value() {
    return this.id;
  }

  get text() {
    return this.name;
  }

  get userName() {
    return this.user?.text || '';
  }
}
