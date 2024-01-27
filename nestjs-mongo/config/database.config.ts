export default () => ({
  mongo: {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE,
    tls: process.env.MONGO_TLS,
    authSource: process.env.MONGO_AUTH_SOURCE,
    replicaSet: process.env.MONGO_REPLICA_SET,
  },
});
