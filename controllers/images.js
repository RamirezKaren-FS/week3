const { Image } = require("../models")

const index = async (req, res) => {
    const images = await Image.findAll()
    res.status(200).render('Images/index.twig', { images })
}

const create = async (req, res, next) => {
    const image = await Image.create(req.files)
    // Sets a pretext "imageId" for our upload middleware
    console.log(image)
    req.imageId = image.id
    console.log(req.imageId)

    // Invoke our upload middleware with next()
    next()
    res.redirect('/images/' + image.id)
    }
    const update = async (req, res, next) => {
    const image = await Image.update(req.files, {
        where: { id: req.params.id }
    })
    // Sets a pretext "imageId" for our upload middleware
    req.imageId = image.id
    // Invoke our upload middleware with next()
    next()
    res.redirect('/images/' + req.params.id)
    }

    const form = async (req, res) => {
        const { id } = req.params
        if (typeof id !== "undefined")
        {
            const image = await Image.findByPk( req.params.id )
            return res.status(200).render(`Images/edit.twig`, { image })
        } 
            res.status(200).render('Images/new.twig')
        
        }

        const show = async (req, res) => {
            const image = await Image.findByPk( req.params.id )
            res.status(200).render('Images/show.twig', { image })
        }    

        // const create = async (req, res) => {
        //     const image = await Image.create(req.body)
        //     res.status(302).redirect('/images')
        //     }

        const remove = async (req, res) => {
            Image.destroy( { where: { id: req.params.id} } )
            res.status(302).redirect('/images')
            }

    module.exports = { index, show, create, update, remove, form }