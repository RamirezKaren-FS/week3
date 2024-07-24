const { Galaxy, Star } = require("../models/index.js")

// Show all resources
const index = async (req, res) => {
  const galaxies = await Galaxy.findAll()
  res.status(200).render('Galaxy/index.twig', { galaxies })
}

const form = async (req, res) => {
  const { id } = req.params
  if (typeof id !== "undefined")
  {
    const galaxy = await Galaxy.findByPk( req.params.id )
    return res.status(200).render(`Galaxy/edit.twig`, { galaxy })
  } 
    res.render('Galaxy/new.twig')
}

// Show resourc
const show = async (req, res) => {
  const galaxy = await Galaxy.findByPk( req.params.id, {
    include: [ Star ]
  } )
  // const stars = await galaxy.getStars()
  res.status(200).render('Galaxy/show.twig', { galaxy })
}

// Create a new resource
const create = async (req, res) => {
  const galaxy = await Galaxy.create(req.body)
  res.status(302).redirect('/galaxies')
}

// Update an existing resource
const update = async (req, res) => {
  const galaxy= await Galaxy.update(req.body, { where: {id: req.params.id}} )
  res.status(302).redirect(`/galaxies/${req.params.id}`)
}

// Remove a single resource
const remove = async (req, res) => {
  Galaxy.destroy( { where: { id: req.params.id} } )
  res.status(302).redirect('/galaxies')
}

// Export all controller actions
module.exports = { index, show, create, update, remove, form }
