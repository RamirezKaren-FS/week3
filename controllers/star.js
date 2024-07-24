const { Star, Planet } = require("../models/index.js")
// Show all resources
const index = async (req, res) => {
  const stars = await Star.findAll()
  res.status(200).render('Star/index.twig', { stars })
}

const form = async (req, res) => {
  const { id } = req.params
  if (typeof id !== "undefined")
  {
    const star = await Star.findByPk( req.params.id )
    return res.status(200).render(`Star/edit.twig`, { star })
  } 
    res.status(200).render('Star/new.twig')
    
}

// Show resourc
const show = async (req, res) => {
  const star = await Star.findByPk( req.params.id,
    {
    include: [ Planet ]
  } 
)
res.status(200).render('Star/show.twig', { star })
}

// Create a new resource
const create = async (req, res) => {
  const star = await Star.create(req.body)
  res.status(302).redirect('/stars')
}

// Update an existing resource
const update = async (req, res) => {
  const star= await Star.update(req.body, { where: {id: req.params.id}} )
  res.status(302).redirect(`/stars/${req.params.id}`)
}

// Remove a single resource
const remove = async (req, res) => {
  Star.destroy( { where: { id: req.params.id} } )
  res.status(302).redirect('/stars')
}

// Export all controller actions
module.exports = { index, show, create, update, remove, form }
