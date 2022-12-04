const mongoose = require('mongoose')

const connertToDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('MongoDB Atlas CONECTADO!')
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = connertToDb
