import BitbucketEnv from '../env/Bitbucket.js';
import EncryptionEnv from '../env/Encryption.js';
import env from '../env/Env.js';
import GithubEnv from '../env/Github.js';
import GitlabEnv from '../env/Gitlab.js';
import GoogleEnv from '../env/Google.js';
import ThreatDragonEnv from '../env/ThreatDragon.js';
import TestEnv from '../env/Test.js';

const tryLoadDotEnv = () => {
    const github = new GithubEnv();
    const gitlab = new GitlabEnv();
    const bitbucket = new BitbucketEnv();
    const encryption = new EncryptionEnv();
    const threatDragon = new ThreatDragonEnv();
    const google = new GoogleEnv();
    const test = new TestEnv();
    env.get().addProvider(github);
    env.get().addProvider(gitlab);
    env.get().addProvider(encryption);
    env.get().addProvider(bitbucket);
    env.get().addProvider(threatDragon);
    env.get().addProvider(google);
    env.get().addProvider(test);
    env.get().hydrate();
};

export default { tryLoadDotEnv };
