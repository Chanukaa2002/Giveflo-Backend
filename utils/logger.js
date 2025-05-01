import { createLogger, format, transports } from "winston";

const loggerFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.errors({ stack: true }),
  format.splat(),
  format.json()
);

const logger = createLogger({
  level: "info",
  format: loggerFormat,
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),

    new transports.File({ filename: "logs/combined.log" }),
    new transports.File({ filename: "logs/errors.log", level: "error" }),
  ],
});

export default logger;
