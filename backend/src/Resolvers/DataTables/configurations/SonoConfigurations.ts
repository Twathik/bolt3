import { DataTableSectionModel } from '../model/DataTableModel'

export const dataTableSonoConfiguration: DataTableSectionModel[] = [
  {
    id: 'section1',
    sectionName: 'Evaluation du VG',
    tableContentType: 'Evaluation_FE_VG',
    widgets: [
      {
        id: 'table1',
        widgetType: 'table',
        tableName: 'Fonction systolique du VG',
        config: [
          {
            columnWidth: 150,
            data: { paramName: 'FE_VSimpson', paramType: 'number' },
            paramHeader: 'FE Simpson (%)',
          },
          {
            columnWidth: 120,
            data: { paramName: 'DTD', paramType: 'number' },
            paramHeader: 'DTS (mm)',
          },
          {
            columnWidth: 120,
            data: { paramName: 'DTS', paramType: 'number' },
            paramHeader: 'DTS (mm)',
          },
        ],
      },
    ],
  },
  {
    id: 'section2',
    sectionName: "Evaluation d'une IM",
    tableContentType: 'Evaluation_IM',
    widgets: [
      {
        id: 'table2',
        widgetType: 'table',
        tableName: "Evaluation d'une IM",
        config: [
          {
            columnWidth: 120,
            data: { paramName: 'SOR', paramType: 'number' },
            paramHeader: 'SOR (mm2)',
          },
          {
            columnWidth: 120,
            data: { paramName: 'VR', paramType: 'number' },
            paramHeader: 'VR (ml)',
          },
        ],
      },
    ],
  },
]
