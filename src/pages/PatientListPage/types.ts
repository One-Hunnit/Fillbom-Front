export interface IPatient {
  id: string;
  name: string;
  birth: string;
  relation: string;
  status: PatientStatus;
}

export enum PatientStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
}
