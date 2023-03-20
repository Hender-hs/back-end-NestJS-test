import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

type AccessToken = { accessToken: string };

@Injectable()
export class AuthService {

  constructor(
	private jwtService: JwtService
  ) {}

  async validateAccess(bearerToken: string): Promise<any> {
	const verification = await this.jwtService.verify(bearerToken);
	return verification;
  }

  async getAccessToken(): Promise<AccessToken> {
	return { accessToken: this.jwtService.sign({}) };
  }
}
