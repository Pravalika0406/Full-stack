const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://banukapravalika5:3436@in-aws.vhnrw.mongodb.net/max-stores')

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')
