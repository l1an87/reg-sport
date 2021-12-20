export class SportTypeEntity {
  id;
  name;
  limit;
  users;

  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.limit = data.limit || 0;
    this.users = data.users || 0;
  }

  get value() {
    return this.id;
  }

  get text() {
    return this.name;
  }
}
