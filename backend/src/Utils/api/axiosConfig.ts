import fs from 'fs'
import http from 'http'
import https from 'https'

export type templateNameType =
  | 'Gap_patient_report'
  | 'med_default_template'
  | 'Gap_schedule_report'
  | 'Gap_schedule_daily_report'
  | 'med_ETT_template'

export interface createSimpleReport<T> {
  folder: 'Patient' | 'Documents' | 'Schedule' | 'Schedules'
  id: string
  fileName:
    | 'PatientReport'
    | 'Document'
    | 'ScheduleReport'
    | 'SchedulesDailyReport'
  ext: 'docx'
  preserve: boolean
  templateName: templateNameType
  payload: T
}
const httpsAgent =
  process.env.NODE_ENV === 'production'
    ? new https.Agent({
        ca: fs.readFileSync('./keys/ca.pem'),
        cert: fs.readFileSync('./keys/server.pem'),
        key: fs.readFileSync('./keys/server-key.pem'),
        dhparam: fs.readFileSync('./keys/dhparam.pem'),
        keepAlive: true,
      })
    : new http.Agent({ keepAlive: true })

export default httpsAgent
