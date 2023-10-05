//! Locked
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
import { Prisma, PrismaClient } from '@prisma/client'

const addSoftDeleteMiddleware = (prisma: PrismaClient): PrismaClient => {
  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'User') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'User') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'User') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'User') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Document') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Document') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Document') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Document') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'DocumentType') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'DocumentType') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'DocumentType') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'DocumentType') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PathologyType') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PathologyType') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PathologyType') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PathologyType') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientFamilyName') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientFamilyName') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientFamilyName') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientFamilyName') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAddress') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAddress') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAddress') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAddress') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAccountNumber') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAccountNumber') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAccountNumber') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientAccountNumber') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'TelecomInfo') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'TelecomInfo') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'TelecomInfo') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'TelecomInfo') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientName') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientName') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientName') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'PatientName') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Patient') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Patient') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Patient') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Patient') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  //! Locked
  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Schedule') {
      if (params.action == 'findUnique' || params.action == 'findFirst') {
        params.action = 'findFirst'
        params.args.where['deleted'] = false
      }
      if (params.action == 'findMany') {
        if (params.args.where != undefined) {
          if (params.args.where.deleted == undefined) {
            params.args.where['deleted'] = false
          }
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Schedule') {
      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] = false
        } else {
          params.args['where'] = { deleted: false }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Schedule') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = {
          deleted: true,
          name: `deleted${Date.now()}`,
        }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
          params.args.data['name'] = `deleted${Date.now()}`
        } else {
          params.args['data'] = {
            deleted: true,
            name: `deleted${Date.now()}`,
          }
        }
      }
    }
    return next(params)
  })

  prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
    if (params.model == 'Schedule') {
      if (params.action === 'aggregate') {
        params.args['where'] = { deleted: false }
      }
    }
    return next(params)
  })

  return prisma
}

export default addSoftDeleteMiddleware
