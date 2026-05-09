import https from 'https';
import path from 'path/win32';
import fs from 'fs';
import axios from 'axios'

const TELLER_BASE_URL = 'https://api.teller.io';
const TELLER_VERSION = '2020-10-12'


function getTellerAgent(): https.Agent {
  const certPath = path.posix.join(process.cwd(), 'certs', 'certificate.pem')
const keyPath = path.posix.join(process.cwd(), 'certs', 'private_key.pem')
  
  console.log('certPath:', certPath)

  return new https.Agent({
    cert: fs.readFileSync(certPath),
    key: fs.readFileSync(keyPath),
  })
}

export async function tellerGet(endpoint: string, accessToken: string): Promise<unknown> {
    const specificEndpoint = `/accounts`;
    const agent = getTellerAgent();
    const url = `${TELLER_BASE_URL}${endpoint}`;

    const response = await axios.get(url, {
        httpsAgent: agent,
        auth : {username: accessToken, password: ''},
        headers: {'Teller-Version': TELLER_VERSION},
    });
    return response.data;
}