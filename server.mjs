import { createServer } from './src/server.js';
const port=Number(process.env.PORT??4173);
createServer().listen(port,'127.0.0.1',()=>console.log(`M.Profit Studio: http://127.0.0.1:${port}`));
