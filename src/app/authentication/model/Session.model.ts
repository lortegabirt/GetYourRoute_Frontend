export interface Jwt {
  token: string;
  sub: string;
  iat: number;
  exp: number;
  name?: string;
}

export class Session {

  constructor(private jwt?: Jwt) {
  }

  get subjectEmail(): string {
    return this.jwt?.sub;
  }

  get subjectName(): string {
    return this.jwt?.name;
  }

  get token(): string {
    return this.jwt?.token;
  }

  get isExpired(): boolean {
    return !this.jwt?.exp || Date.now() > this.jwt.exp * 1000
  }

  get issueDate(): Date {
    return this.jwt?.iat && new Date(this.jwt.iat * 1000);
  }
}
