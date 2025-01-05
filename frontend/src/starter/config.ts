import { config } from "dotenv";

config();

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;