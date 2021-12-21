import { UsersEntity } from "../users/users.entity";

export class TeamsEntity {
  id;
  name;
  user;
  fileId;
  fileName;

  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.user = data.user ? new UsersEntity(data.user) : null;
    this.medicalCertificateId = data.medicalCertificateId || 0;
    this.medicalCertificateName = data.medicalCertificateName || '';
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

  get medicalCertificateUrl() {
    return `/api/files/${this.medicalCertificateId}/${this.medicalCertificateName}`;
  }
}
