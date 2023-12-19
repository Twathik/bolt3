import * as TypeGraphQL from 'type-graphql'
import { WorkingList } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { exec } from 'child_process'
import { rmSync } from 'fs'
import { GetWorkingListArgs } from './args/GetWorkingListArgs'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class ToggleLockWorkingList {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: false,
  })
  async toggleLockWorkingList(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() { id }: GetWorkingListArgs,
  ): Promise<WorkingList> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const workingList = await prisma.workingList.findUniqueOrThrow({
        where: { id },
      })

      if (workingList) {
        await prisma.workingList.update({
          where: { id },
          data: {
            locked: !workingList.locked,
          },
        })
        if (workingList.modalityExamStatus === 'CLOSED') {
          exec(
            `docker run --rm -v ./worklists:/var/local imbio/dcmtk dump2dcm /var/local/${workingList.id}.txt /var/local/${workingList.id}.wl`,
            (error, stdout, stderr) => {
              if (error) {
                console.log(`error: ${error.message}`)
                return
              }
              if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
              }
              console.log(`stdout: ${stdout}`)
            },
          )
        } else {
          rmSync(`./worklists/${workingList.id}.wl`)
        }
      } else {
        throw Error('conditions not satisfied, working list not created')
      }

      return workingList
    } catch (error) {
      console.log({ error })
      throw Error('The workingList entry has not been created')
    }
  }
}
