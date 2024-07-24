const { Planet, Star } = require("../models/index.js")
const { StarsPlants} = require("../models/starsplanets.js")
// Show all resources
const index = async (req, res) => {
  const planets = await Planet.findAll()
  res.status(200).render('Planet/index.twig', { planets })
}

const form = async (req, res) => {
  const { id } = req.params
  if (typeof id !== "undefined")
  {
    const planet = await Planet.findByPk( req.params.id )
    return res.status(200).render(`Planet/edit.twig`, { planet })
  } 
    res.status(200).render('Planet/new.twig')
    
}

// Show resourc
const show = async (req, res) => {
  const planet = await Planet.findByPk( req.params.id, {
    include: [ Star ] // StarsPlants
  } )
  res.status(200).render('Planet/show.twig', { planet })
}

// Create a new resource
const create = async (req, res) => {
  const planet = await Planet.create(req.body)
  res.status(302).redirect('/planets')
}

// Update an existing resource
const update = async (req, res) => {
  const planet= await Planet.update(req.body, { where: {id: req.params.id}} )
  res.status(302).redirect(`/planets/${req.params.id}`)
}

// Remove a single resource
const remove = async (req, res) => {
  Planet.destroy( { where: { id: req.params.id} } )
  res.status(302).redirect('/planets')
}

// Export all controller actions
module.exports = { index, show, create, update, remove, form }
