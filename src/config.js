// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('dotenv');

config();

module.exports = {
    DATABASE: {
        MONGOURI: process.env.DATABASE_URL_URI,
    },
    BCRYPT: {
        SALT_BCRYPT: parseInt(process.env.SALT_BCRYPT, 10),
    },
};
