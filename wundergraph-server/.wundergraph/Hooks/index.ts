import { HooksConfig } from '../generated/wundergraph.hooks';
import authentication from './authentification';
import globalConf from './global';
import mutations from './mutations';
import queries from './queries';
import subscriptions from './subscriptions';
import uploads from './uploads';

const hooks: HooksConfig = {
  queries,
  mutations,
  uploads,
  authentication,
  global: globalConf,
  subscriptions,
};

export default hooks;
