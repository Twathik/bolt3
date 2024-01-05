import * as TypeGraphQL from 'type-graphql'
import { TriggerInsertDataSubscriptionArgs } from '../args/TriggerInsertDataSubscriptionArgs'
import { InsertDataPayload } from '../args/InsertDataPayload'
import { DataTableConfigurations } from '../configurations/DataTableConfigurations'
import { DataTableConfigModel, WidgetUnionType } from '../model/DataTableModel'
import { Context } from '../../../context'
import { PrismaClient } from '@prisma/client'
import cloneDeep from 'lodash.clonedeep'

export class TriggerInsertDataSubscription {
  @TypeGraphQL.Mutation((_returns) => Boolean)
  async triggerInsertDataSubscription(
    @TypeGraphQL.Args()
    {
      paramData,
      value,
      clinicalEventId,
      tableContentType,
    }: TriggerInsertDataSubscriptionArgs,
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.PubSub('INSERT_DATA_IN_EDITOR')
    publish: TypeGraphQL.Publisher<InsertDataPayload>,
  ): Promise<Boolean> {
    const prisma = ctx.prisma as PrismaClient
    try {
      const event = await prisma.clinicalEvent.findFirstOrThrow({
        where: { id: clinicalEventId },
      })

      const config = DataTableConfigurations[event.eventType]
      let widget: WidgetUnionType | null = null
      let columnWidth: number = 120
      config.forEach((section) =>
        section.widgets.forEach((w) => {
          switch (w.widgetType) {
            case 'table':
              w.config.forEach((c, k) => {
                if (c.data.paramName === paramData.paramName) {
                  columnWidth = c.columnWidth
                  widget = cloneDeep(w) as typeof w
                  ;(widget as DataTableConfigModel).config[k].value = value
                }
              })
              break
            case 'pictureGenerator':
              if (w.paramName === paramData.paramName)
                widget = cloneDeep(w) as typeof w
              break
            default:
              break
          }
        }),
      )
      if (widget === null) throw Error('Not recognized widget Type')
      await publish({
        paramData,
        columnWidth,
        value,
        widget,
        clinicalEventId,
        tableContentType,
      })
      return true
    } catch (error) {
      console.log({ error })
      throw Error('The data could not have been updated')
    }
  }
}
