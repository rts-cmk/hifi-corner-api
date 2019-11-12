import Winston from "winston"

export const log = Winston.createLogger({
	transports: [new Winston.transports.Console()]
})
