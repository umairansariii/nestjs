import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'Signed up successfully.' };
  }
  signin() {
    return { message: 'Signed in successfully.' };
  }
}
