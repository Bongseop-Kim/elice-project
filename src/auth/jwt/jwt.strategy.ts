import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const user = await this.usersService.findUserByIdWithoutPassword(
      payload.sub,
    );
    const {
      id,
      name,
      email,
      emailVerified,
      password,
      phoneNumber,
      role,
      createdAt,
      updatedAt,
      userLat,
      userLon,
      hospitalId,
      adminVerified,
      address,
    } = user;
    if (user) {
      return {
        id,
        name,
        email,
        emailVerified,
        phoneNumber,
        role,
        createdAt,
        updatedAt,
        userLat,
        userLon,
        hospitalId,
        adminVerified,
        address,
      }; //request.user
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
