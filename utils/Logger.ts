import path from 'path';
import fs from 'fs';
import { createLogger, format, transports, Logger } from 'winston';

const logDir = path.resolve(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const baseLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(logDir, 'test-execution.log') })
  ]
});

interface CustomLogger extends Logger {
  pass: (msg: string) => void;
  fail: (msg: string) => void;
}
const logger = baseLogger as CustomLogger;

logger.pass = (msg: string) => {
  logger.info(`[PASS] ✅ ${msg}`);
};

logger.fail = (msg: string) => {
  logger.error(`[FAIL] ❌ ${msg}`);
};

export default logger;

