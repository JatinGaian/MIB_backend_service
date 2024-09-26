const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InteractionSchema = new Schema({
  sprintId: { type: String, required: true },
  userEmail: { type: String, required: true },
  interactedEmail: { type: String, required: true },
  interactionType: { type: String, required: true },
  comment: { type: Array, required: false },
});

const Interactions = mongoose.model("interaction", InteractionSchema);

module.exports = Interactions;
