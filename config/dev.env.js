'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AIRTABLE_API_KEY: '"keyLnGRdk7Fnnn43o"',
  AIRTABLE_BASE: '"gift_pics"'
})