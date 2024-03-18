import { EventTypes } from '../../../@generated'
import { DataTableSectionModel } from '../model/DataTableModel'
import { dataTableSonoConfiguration } from './SonoConfigurations'

export const DataTableConfigurations: {
  [key in EventTypes]: DataTableSectionModel[]
} = {
  GENERAL_SONO: dataTableSonoConfiguration,
  DIAGNOSTIC: [],
  PRESCRIPTION: [],
}
