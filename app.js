const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const { buildSchema, __Directive } = require('graphql')
const { readFileSync } = require('fs')
const qraphQlResolvers = require('./graphql/resolvers/index')

const PORT = process.env.PORT || 3001

const schemaString = readFileSync('./graphql/schema/schema.graphql', {
  encoding: 'utf-8',
})
const schema = buildSchema(schemaString)

app.use(cors())
app.use(bodyParser.json())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: qraphQlResolvers,
    graphiql: true,
  })
)

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wesyq.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Example app listening on port port: ${PORT}`)
    )
  })
  .catch((err) => {
    console.log(err)
  })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
  })
}
