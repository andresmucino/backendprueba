import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectPinoLogger(UsersService.name)
    private readonly logger: PinoLogger,
  ) {}

 public async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}