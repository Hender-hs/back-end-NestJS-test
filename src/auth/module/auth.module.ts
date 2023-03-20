import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../config/constants";
import { AuthService } from "@AuthService/auth.service";
import { AuthController } from "@Authcontroller/auth.controller";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "../guard/jwtAuth.guard";

const JwtModuleConfigured = JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: { expiresIn: process.env.JWT_TIME_EXPIRATION || "1d" }
});

const JwtAuthGuardGlobalConfig = {
  provide: APP_GUARD,
  useClass: JwtAuthGuard,
}

@Module({
  imports: [PassportModule, JwtModuleConfigured],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuardGlobalConfig],
  exports: [AuthService]
})
export class AuthModule {}
