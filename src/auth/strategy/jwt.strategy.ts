import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { jwtConstants } from "../config/constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
	const jwtStrategyConfig = {
	  jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	  ignoreExpiration: false,
	  secretOrKey: jwtConstants.secret
	}
	super(jwtStrategyConfig);
  }

  async validate(): Promise<Object> {
	return {}; 
  }
}
