const mongoose = require('mongoose');
const { Schema } = mongoose;// this line makes use of Schema object in mongoose which is used to create new schema
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },//relationship field
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema); //this line registers schema with mongoose
