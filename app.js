import logger from "./utils/logger.js"
import server from "./utils/server.js"
import {connectDB} from "./config/db.js"

const PORT = process.env.PORT;
server.listen(PORT,()=>{
    logger.info(`Server running in => ${PORT}`)
    connectDB();
})

