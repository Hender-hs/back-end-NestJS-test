import { AuthService } from "@AuthService/auth.service";
import { Controller, Request, Get, Body } from "@nestjs/common";
import { Request as RequestParam } from "express";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("auth/get-access")
  async login(@Request() req: RequestParam) {
	return this.authService.getAccessToken();
  }
}
