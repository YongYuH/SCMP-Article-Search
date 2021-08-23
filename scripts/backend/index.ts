import fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import path from 'path'

import { data } from './data'
import { search } from './search'

const port = process?.env?.BACKEND_PORT || 3001

const Fastify = fastify()

interface Headers {
  host?: string
}

interface Query {
  q?: string
  t?: string
}

interface Req {
  headers: Headers
  query: Query
  secure?: boolean
}

const devApp = async () => {
  try {
    Fastify.register(fastifyStatic, {
      root: path.resolve(__dirname, '..', 'assets'),
    })

    Fastify.register(fastifyCors)

    // Endpoint for search query.
    Fastify.get('/search', (req: Req, res) => {
      // Get params.
      if (typeof req.query.q === 'undefined') {
        res.status(404).send('Query text not found.')
      } else {
        // Normalize query strings.
        const q = req.query.q || ''
        const t = req.query.t || ''
        const fileSystemHost = `${req.secure ? 'https://' : 'http://'}${
          req.headers.host
        }`
        res.send(search(q, t, fileSystemHost))
      }
    })

    // Endpoint for topics listing.
    Fastify.get('/topics', (req, res) => {
      const topicResult = data.topics
      res.send(topicResult)
    })

    Fastify.listen(port, (err, address) => {
      if (err) throw err
      console.log(`Server is now listening on ${address}`)
    })
  } catch (e) {
    process.exit(1)
  }
}

devApp()
