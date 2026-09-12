import { createReadStream, statSync } from 'node:fs';
import { createServer as createNodeServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
export function createServer(){return createNodeServer((request,response)=>{const pathname=new URL(request.url,'http://localhost').pathname;const requested=resolve(root,`.${pathname==='/'?'/index.html':pathname}`);if(!requested.startsWith(`${root}${sep}`)){response.writeHead(403).end('Forbidden');return;}try{if(!statSync(requested).isFile())throw new Error('not a file');response.writeHead(200,{'content-type':types[extname(requested)]??'application/octet-stream','x-content-type-options':'nosniff'});createReadStream(requested).pipe(response);}catch{response.writeHead(404,{'content-type':'text/plain; charset=utf-8'}).end('Not found');}});}
