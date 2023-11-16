import fs from 'fs'
import { PdfReader } from 'pdfreader'

const generateDrugsAndKidneyTXT = () => {
  let data: string = ''
  new Promise((resolve, reject) => {
    new PdfReader().parseFileItems(
      './src/Drugs/raws/The_Renal_Drug_Handbook_The_Ultimate.pdf',
      (err, item) => {
        if (err) reject(err)
        else if (!item) {
          resolve(data)
          console.warn('end of file')
        } else if (item.text) {
          // console.log({ text: item.text })
          data = data.concat(
            `
${item.text}`,
          )
        }
      },
    )
  }).then(() => {
    console.log('write')
    fs.writeFileSync(
      './src/Drugs/formatted/KidneyAndDrugsFormattedJSON.txt',
      data,
      'utf-8',
    )
  })
}

export default generateDrugsAndKidneyTXT
