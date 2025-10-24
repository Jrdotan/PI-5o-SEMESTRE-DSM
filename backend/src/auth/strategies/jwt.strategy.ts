   
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
    

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, 
      secretOrKey: configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
    });
  }
;
  async validate(payload: any) {
    // This payload contains the data embedded in the JWT
    // You can fetch the user from the database here if needed
    return { userId: payload.sub, username: payload.username };
  }
}