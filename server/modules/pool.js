const pg = require('pg')

let databaseName = 'react-gallery'

if (process.env.NODE_ENV === 'test') {
  databaseName = 'prime_testing'
}

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: database,
    // allowExitOnIdle: true 
})

module.exports = pool
