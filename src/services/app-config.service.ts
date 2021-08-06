import { AppConfig } from '../models/app-config.interface';

export function getAppConfig(): AppConfig {
  return {
    api: {
      base: process.env.NEXT_PUBLIC_API_BASE as string
    }
  }
}