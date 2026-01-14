import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
  secret: process.env.SECRET_KEY || 'MaryAbbySecretKey',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);