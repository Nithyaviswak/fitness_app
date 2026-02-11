const { v4: uuid } = require("uuid");
const mongoose = require("mongoose");
const User = require("../models/User");
const { validateProfile } = require("../utils/validators");
const { memoryStore } = require("../utils/memoryStore");

async function createProfile(req, res) {
  const { valid, errors, sanitized } = validateProfile(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }
  const id = uuid();
  const profile = { id, ...sanitized };
  memoryStore.users.set(id, profile);

  if (mongoose.connection.readyState === 1) {
    await User.create(sanitized);
  }

  return res.json(profile);
}

module.exports = { createProfile };
