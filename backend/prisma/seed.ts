/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */

import { Patient, PrismaClient, Role, User, Modality } from '@prisma/client'
const prisma = new PrismaClient()
import { format } from 'date-fns'

async function main() {
  console.log(`Start seeding ...`)
  const userData: Omit<User, 'id' | 'lastConnection' | 'createdAt'>[] = [
    {
      firstName: 'Admin',
      lastName: 'app_admin',
      fullName: 'Administrateur',
      avatarUrl: '',
      role: Role.ADMIN,
      phoneNumbers: ['0557506276'],
      email: 'takdemt.wathik@gmail.com',
      userId: '',
      searchApiKey: '',
      searchApiKeyId: null,
    },
  ]
  let userId: string = ''
  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    })
    userId = user.id
    console.log(`Created user with id: ${user.id}`)
  }

  const patientData: Omit<
    Patient,
    | 'createdAt'
    | 'updated'
    | 'deleted'
    | 'informationsConfirmed'
    | 'address'
    | 'onTrash'
    | 'historyId'
    | 'diagnosticId'
  >[] = [
    {
      id: '1',
      firstName: 'Wathik',
      lastName: 'Takdemt',
      ddn: new Date(1986, 6, 27),
      nTel: '0557506276',
      sexe: 'M',
      height: null,
      weight: null,
      clinicalData: '',
      documentData: null,
    },
    {
      id: '2',
      firstName: 'Afaf',
      lastName: 'Mellak',
      ddn: new Date(1989, 4, 14),
      nTel: '',
      sexe: 'F',
      height: null,
      weight: null,
      clinicalData: '',
      documentData: null,
    },
    {
      id: '3',
      firstName: 'Kamal',
      lastName: 'Takdemt',
      ddn: new Date(1957, 4, 17),
      nTel: '',
      sexe: 'M',
      height: null,
      weight: null,
      clinicalData: '',
      documentData: null,
    },
    {
      id: '4',
      firstName: 'Fatiha',
      lastName: 'Boudjella',
      ddn: new Date(1957, 7, 27),
      nTel: '',
      sexe: 'F',
      height: null,
      weight: null,
      clinicalData: '',
      documentData: null,
    },
    {
      id: '5',
      firstName: 'Kadour',
      lastName: 'Elmahri',
      ddn: new Date(1950, 7, 27),
      nTel: '',
      sexe: 'M',
      height: null,
      weight: null,
      clinicalData: '',
      documentData: null,
    },
    {
      id: '6',
      firstName: 'Mohamed',
      lastName: 'Bouchnafa',
      ddn: new Date(1960, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '7',
      firstName: 'Saliha',
      lastName: 'Zamouchi',
      ddn: new Date(1940, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'F',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '8',
      firstName: 'Amel',
      lastName: 'Ouchene',
      ddn: new Date(1980, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'F',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '9',
      firstName: 'Karim',
      lastName: 'Rahache',
      ddn: new Date(1981, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '10',
      firstName: 'Rafik',
      lastName: 'Raskin',
      ddn: new Date(1989, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '11',
      firstName: 'Sabine',
      lastName: 'Zighoud',
      ddn: new Date(1991, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'F',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '12',
      firstName: 'Iyed',
      lastName: 'Bedjaoui',
      ddn: new Date(1988, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '13',
      firstName: 'Chawki',
      lastName: 'Bedjaoui',
      ddn: new Date(1989, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '14',
      firstName: 'Mohamed',
      lastName: 'Ouchene',
      ddn: new Date(1956, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '15',
      firstName: 'Malika',
      lastName: 'Bouali',
      ddn: new Date(1957, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'F',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '16',
      firstName: 'Leila',
      lastName: 'Guasmi',
      ddn: new Date(1995, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'F',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '17',
      firstName: 'Mohamed Taher',
      lastName: 'Bouafia',
      ddn: new Date(1953, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '18',
      firstName: 'Mohamed',
      lastName: 'Chettibi',
      ddn: new Date(1970, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },
    {
      id: '19',
      firstName: 'Mohamed Amine',
      lastName: 'Boudjella',
      ddn: new Date(1969, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'M',
      clinicalData: '',
      documentData: null,
    },

    {
      id: '20',
      firstName: 'Samira',
      lastName: 'Oukid',
      ddn: new Date(1985, 7, 27),
      height: null,
      weight: null,
      nTel: '',
      sexe: 'F',
      clinicalData: '',
      documentData: null,
    },
  ]

  const ModalityData: Omit<Modality, 'id' | 'modalityPseudo'>[] = [
    {
      modalityName: 'modality1',
      modalityAETitle: 'AET',
      modalityIpAddress: '0.0.0.0',
      modalityPort: 104,
      modalityType: 'US',
      deleted: false,
      activated: true,
      enabled: true,
    },
    {
      modalityName: 'modality2',
      modalityAETitle: 'AET',
      modalityIpAddress: '0.0.0.0',
      modalityPort: 104,
      modalityType: 'US',
      deleted: false,
      activated: false,
      enabled: true,
    },
    {
      modalityName: 'modality3',
      modalityAETitle: 'AET',
      modalityIpAddress: '0.0.0.0',
      modalityPort: 104,
      modalityType: 'US',
      deleted: false,
      activated: false,
      enabled: true,
    },
    {
      modalityName: 'modality4',
      modalityAETitle: 'AET',
      modalityIpAddress: '0.0.0.0',
      modalityPort: 104,
      modalityType: 'US',
      deleted: false,
      activated: false,
      enabled: true,
    },
  ]

  for (const u of patientData) {
    const patient = await prisma.patient.upsert({
      where: { id: u.id },
      update: {},
      create: u,
    })
    const diagnostic = await prisma.clinicalEvent.create({
      data: {
        eventType: 'DIAGNOSTIC',
        eventCategory: 'FOLDER',
        userId,
        patientId: patient.id,
      },
    })
    const history = await prisma.clinicalEvent.create({
      data: {
        eventType: 'HISTORY',
        eventCategory: 'FOLDER',
        userId,
        patientId: patient.id,
      },
    })
    await prisma.patient.update({
      data: {
        clinicalData: JSON.stringify([
          {
            type: 'document-header',
            children: [{ text: '' }],
            createdAt: format(diagnostic.createdAt, 'dd-MM-yyy'),
            eventId: diagnostic.id,
            documentType: 'DIAGNOSTIC',
            id: patient.id,
          },
          {
            type: 'p',
            children: [{ text: '' }],
          },
          {
            type: 'p',
            children: [{ text: '' }],
          },
          {
            type: 'document-header',
            children: [{ text: '' }],
            createdAt: format(history.createdAt, 'dd-MM-yyy'),
            eventId: history.id,
            documentType: 'HISTORY',
            id: patient.id,
          },
          {
            type: 'p',
            children: [{ text: '' }],
          },
          {
            type: 'p',
            children: [{ text: '' }],
          },
        ]),
      },
      where: { id: patient.id },
    })
    console.log(`Created patient with id: ${patient.id}`)
  }

  for (const d of ModalityData) {
    const modality = await prisma.modality.upsert({
      where: { modalityName: d.modalityName },
      update: {},
      create: d,
    })
    console.log(`Created modalities with id: ${modality.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
