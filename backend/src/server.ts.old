import 'reflect-metadata'
import express from 'express'

import bodyParser from 'body-parser'
import schema from './schema'
import { createContext } from './context'
import cors from 'cors'
import { createHandler } from 'graphql-http/lib/use/express'

// import { importTemplates } from './Utils/OpenEHR/Templates/importTemplates'

export const port = 4000

export async function server(): Promise<void> {
  //  await importTemplates()
  const app = express()

  function addRawBody(req, _res, buf, _encoding) {
    req.rawBody = buf.toString()
    /*  fs.writeFileSync(`./ReqFile.json`, req.rawBody, {
      encoding: 'utf8',
    }) */
    /* const json = JSON.parse(req.rawBody)
    console.log({ json })

    fs.writeFileSync(`./DebuginFile.json`, json, {
      encoding: 'utf8',
    }) */
  }
  app.use((req, res, next) => {
    bodyParser.json({
      verify: addRawBody,
      limit: '50mb',
    })(req, res, (err) => {
      if (err) {
        console.log({ err })
        res.sendStatus(400)
        return
      }
      next()
    })
  })

  // app.use(bodyParser.json({ limit: '50mb' }))

  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      parameterLimit: 100000,
      extended: true,
    }),
  )
  app.use((err, _req, res, next) => {
    // This check makes sure this is a JSON parsing issue, but it might be
    // coming from any middleware, not just body-parser:

    if (
      err instanceof SyntaxError &&
      (err as any).status === 400 &&
      'body' in err
    ) {
      console.error(err)
      return res.sendStatus(400) // Bad request
    }

    next()
  })
  app.use(cors({ origin: '*' }))
  app.use(
    '/graphql',
    createHandler({
      schema,
      context: async (req, res) => await createContext({ req, res }),
    }),
  )

  app.listen(port)
}

server().then(() =>
  console.log(`\
🚀 Server ready at: http://localhost:${port}
⭐️ Graphql server up and ready`),
)
