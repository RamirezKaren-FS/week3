const { Star } = require("../models/index.js")
// Show all resources
const index = async (req, res) => {
  const stars = await Star.findAll()
  res.status(200).json(stars)
}

// Show resource
const show = async (req, res) => {
  const star = await Star.findOne( { where: { id: req.params.id} } )
  res.status(200).json(star)
}

// Create a new resource
const create = async (req, res) => {
  const star = await Star.create(req.body)
  res.status(201).json(star)
}

// Update an existing resource
const update = async (req, res) => {
  const star= await Star.update(req.body, { where: {id: req.params.id}} )
  res.status(200).json(star)
}

// Remove a single resource
const remove = async (req, res) => {
  Star.destroy( { where: { id: req.params.id} } )
  res.status(204).json(true)
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
