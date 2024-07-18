const { Planet } = require("../models/index.js")
// Show all resources
const index = async (req, res) => {
  const planets = await Planet.findAll()
  res.status(200).json(planets)
}

// Show resource
const show = async (req, res) => {
  const planet = await Planet.findOne( { where: { id: req.params.id} } )
  res.status(200).json(planet)
}

// Create a new resource
const create = async (req, res) => {
  const planet = await Planet.create(req.body)
  res.status(201).json(planet)
}

// Update an existing resource
const update = async (req, res) => {
  const planet= await Planet.update(req.body, { where: {id: req.params.id}} )
  res.status(200).json(planet)
}

// Remove a single resource
const remove = async (req, res) => {
  Planet.destroy( { where: { id: req.params.id} } )
  res.status(204).json(true)
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
