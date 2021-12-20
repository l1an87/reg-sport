export class RolesEntity {
  id;
  code;
  description;

  constructor(data = {}) {
    this.id = data.id || null;
    this.code = data.code || '';
    this.description = data.description || '';
  }

  get value() {
    return this.id;
  }

  get text() {
    return this.description;
  }
}
