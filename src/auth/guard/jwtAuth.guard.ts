import { AuthService } from '@AuthService/auth.service';
import { ExecutionContext, Injectable, UnauthorizedException, CanActivate,  } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {

  private publicEndpoints = ["/auth/get-access"];

  constructor(private authService: AuthService) {}

  private isPublicEndpoint(endPoint: string): boolean {
	return this.publicEndpoints.some((pubEndPnt: string) => pubEndPnt === endPoint); 
  }

  async canActivate(context: ExecutionContext) {
	const req: Request = context.switchToHttp().getRequest();
	const bearerToken = req.headers.authorization?.split("Bearer ")[1];

	if (this.isPublicEndpoint(req.path))
	  return true;

	if (!bearerToken)
	  return false;

    return this.authService.validateAccess(bearerToken);
  }
}

