require("dotenv").config();

module.exports = {
  poweredByHeader: false,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_SECRET_REFRESH: process.env.SESSION_SECRET_REFRESH,
    SHOPIFY_API: process.env.SHOPIFY_API,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET
  }
};
