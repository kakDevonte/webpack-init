import path from 'path';

const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development';

const DIST_DIR: string = path.join(__dirname, '../dist');
const SRC_DIR: string = path.join(__dirname, '../src');
const DEV_SERVER_PORT: number = 5341;

export { IS_DEV, DIST_DIR, SRC_DIR, DEV_SERVER_PORT };
