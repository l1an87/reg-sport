import { isoToString } from "../../utils/date";

export class MembersEntity {
  id;
  firstName;
  lastName;
  middleName;
  gender;
  birthday;
  inJob;
  position;
  medicalType;
  admitted;
  medicalCertificateId;
  medicalCertificateName;
  photoId;
  photoName;
  sportTypes;
  team;
  birthdayName = '';
  inJobName = '';

  constructor(data) {
    this.id = data.id || null;
    this.lastName = data.lastName || '';
    this.firstName = data.firstName || '';
    this.middleName = data.middleName || '';
    this.gender = data.gender || '';
    this.birthday = data.birthday || '';
    this.inJob = data.inJob || '';
    this.position = data.position || '';
    this.medicalType = data.medicalType || '';
    this.admitted = data.admitted || false;
    this.medicalCertificateId = data.medicalCertificateId || null;
    this.medicalCertificateName = data.medicalCertificateName || '';
    this.photoId = data.photoId || null;
    this.photoName = data.photoName || '';
    this.sportTypes = data.sportTypes || [];
    this.team = data.team || null;

    this.birthdayName = isoToString(this.birthday);
    this.inJobName = isoToString(this.inJob);
  }

  get medicalCertificateUrl() {
    if (!this.medicalCertificateId) return '';
    return `/api/files/${this.medicalCertificateId}/${this.medicalCertificateName}`;
  }

  get photoUrl() {
    if (!this.photoId) return '';
    return `/api/files/${this.photoId}/${this.photoName}`;
  }

  get teamName() {
    return this.team?.name || '';
  }

  get fio() {
    return `${this.lastName || ''} ${this.firstName || ''} ${this.middleName || ''} `;
  }
}
