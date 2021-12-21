import { RolesEntity } from '../roles/roles.entity';

export class UsersEntity {
  id;
  email;
  isBanned;
  roles;

  constructor(data = {}) {
    this.id = data.id || null;
    this.email = data.email || '';
    this.isBanned = data.isBanned || false;
    this.team = data.team || null;
    this.roles = (data.roles || []).map(i => new RolesEntity(i));
  }

  get value() {
    return this.id;
  }

  get text() {
    return this.email;
  }

  get rolesName() {
    return this.roles
      .map(i => i.description)
      .join('; ');
  }

  get teamName() {
    return this.team?.name || '';
  }
}
