import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x51cC35639Af0eF9F952009e397949F5c9B1d7AB2'
);

export default instance;