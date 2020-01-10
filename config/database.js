// config.js
const config = {
    db: {
      host: 'localhost',
      port: 27017,
      name: 'archive'
    }
   };

const { db: { host, port, name } } = config;
const   connectionString = `mongodb://${host}:${port}/${name}`;

 

module.exports = { url: connectionString };
