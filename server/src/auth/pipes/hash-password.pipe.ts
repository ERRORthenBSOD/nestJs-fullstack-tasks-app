import { PipeTransform } from '@nestjs/common';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';

export class HashPasswordPipe implements PipeTransform {
  async transform(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    const { password } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 12);

    return {
      ...authCredentialsDto,
      password: hashedPassword,
    };
  }
}
