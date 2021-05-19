//imports the IPFS API
import { create } from 'ipfs-http-client';

/**
 * creates & exports new instance for 
 * IPFS using infura as host, for use.
 */
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs;
