export interface Jwt {
  token: string;
  sub: string;
  iat: number;
  exp: number;
  name?: string;
}

export class Session {

  constructor(private jwt: Jwt) {
  }

  get subjectEmail() {
    return this.jwt.sub
  }

  get subjectName() {
    return this.jwt.name
  }

  get token() {
    return this.jwt.token;
  }

  get isExpired() {
    return !this.jwt.exp || Date.now() > this.jwt.exp * 1000
  }

  get issueDate() {
    return new Date(this.jwt.iat * 1000);
  }
}
