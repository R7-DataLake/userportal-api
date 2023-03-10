import { FastifyInstance } from "fastify"

export default async (fastify: FastifyInstance, _options: any, done: any) => {

  fastify.addHook("onRequest", (request) => request.jwtVerify())

  fastify.register(require('./drug'), { prefix: '/drugs' })
  fastify.register(require('./drug_usage'), { prefix: '/drug-usages' })
  fastify.register(require('./lab'), { prefix: '/labs' })
  fastify.register(require('./lab_group'), { prefix: '/lab-groups' })
  fastify.register(require('./insurance'), { prefix: '/insurances' })
  fastify.register(require('./occupation'), { prefix: '/occupations' })
  fastify.register(require('./nation'), { prefix: '/nations' })
  fastify.register(require('./provider'), { prefix: '/providers' })

  done()

} 
