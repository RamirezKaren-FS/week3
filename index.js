// Load in our Express framework
const express       = require(`express`)
var bodyParser = require('body-parser')
// Create a new Express instance called "app"
const app           = express()
app.use(bodyParser.urlencoded({ extended: false }))
// Load in our RESTful routers
const routers = require('./routers/index.js')

app.set('views', './views')
app.set('view engine', 'twig')
// Home page welcome middleware
app.get('/', (req, res) => {
  res
    .status(200)
    .render('home')
    // .send('Welcome to Star Tracker Library')
})

// Register our RESTful routers with our "app"
app.use(`/planets`,  routers.planet)
app.use(`/stars`,    routers.star)
app.use(`/galaxies`, routers.galaxy)
// app.use(`/starsplanets`, routers.starsplanets)

// Set our app to listen on port 3000
app.listen(3000)
