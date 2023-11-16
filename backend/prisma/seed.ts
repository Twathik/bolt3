/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */

import {
  Patient,
  PrismaClient,
  Role,
  User,
  DocumentTemplate,
} from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  const userData: Omit<User, 'id' | 'lastConnection' | 'createdAt'>[] = [
    {
      firstName: 'Admin',
      lastName: 'app_admin',
      fullName: 'Administrateur',
      avatarUrl: '',
      role: Role.ADMIN,
      typesenseApiKey: 'xyz',
      phoneNumbers: ['0557506276'],
      email: 'takdemt.wathik@gmail.com',
      userId: '',
    },
  ]

  const patientData: Omit<
    Patient,
    | 'createdAt'
    | 'updated'
    | 'deleted'
    | 'informationsConfirmed'
    | 'address'
    | 'onTrash'
  >[] = [
    {
      id: '1',
      firstName: 'Wathik',
      lastName: 'Takdemt',
      ddn: new Date(1986, 6, 27),
      nTel: '0557506276',
      sexe: 'M',
    },
    {
      id: '2',
      firstName: 'Afaf',
      lastName: 'Mellak',
      ddn: new Date(1989, 4, 14),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '3',
      firstName: 'Kamal',
      lastName: 'Takdemt',
      ddn: new Date(1957, 4, 17),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '4',
      firstName: 'Fatiha',
      lastName: 'Boudjella',
      ddn: new Date(1957, 7, 27),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '5',
      firstName: 'Kadour',
      lastName: 'Elmahri',
      ddn: new Date(1950, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '6',
      firstName: 'Mohamed',
      lastName: 'Bouchnafa',
      ddn: new Date(1960, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '7',
      firstName: 'Saliha',
      lastName: 'Zamouchi',
      ddn: new Date(1940, 7, 27),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '8',
      firstName: 'Amel',
      lastName: 'Ouchene',
      ddn: new Date(1980, 7, 27),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '9',
      firstName: 'Karim',
      lastName: 'Rahache',
      ddn: new Date(1981, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '10',
      firstName: 'Rafik',
      lastName: 'Raskin',
      ddn: new Date(1989, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '11',
      firstName: 'Sabine',
      lastName: 'Zighoud',
      ddn: new Date(1991, 7, 27),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '12',
      firstName: 'Iyed',
      lastName: 'Bedjaoui',
      ddn: new Date(1988, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '13',
      firstName: 'Chawki',
      lastName: 'Bedjaoui',
      ddn: new Date(1989, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '14',
      firstName: 'Mohamed',
      lastName: 'Ouchene',
      ddn: new Date(1956, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '15',
      firstName: 'Malika',
      lastName: 'Bouali',
      ddn: new Date(1957, 7, 27),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '16',
      firstName: 'Leila',
      lastName: 'Guasmi',
      ddn: new Date(1995, 7, 27),

      nTel: '',
      sexe: 'F',
    },
    {
      id: '17',
      firstName: 'Mohamed Taher',
      lastName: 'Bouafia',
      ddn: new Date(1953, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '18',
      firstName: 'Mohamed',
      lastName: 'Chettibi',
      ddn: new Date(1970, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '19',
      firstName: 'Mohamed Amine',
      lastName: 'Boudjella',
      ddn: new Date(1969, 7, 27),

      nTel: '',
      sexe: 'M',
    },
    {
      id: '20',
      firstName: 'Samira',
      lastName: 'Oukid',
      ddn: new Date(1985, 7, 27),

      nTel: '',
      sexe: 'F',
    },
  ]

  const DocumentTemplateData: Omit<DocumentTemplate, 'id'>[] = [
    {
      eventType: 'DIAGNOSTIC',
      template: '',
    },
    {
      eventType: 'PRESCRIPTION',
      template: '',
    },
  ]

  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  for (const u of patientData) {
    const patient = await prisma.patient.upsert({
      where: { id: u.id },
      update: {},
      create: u,
    })
    console.log(`Created patient with id: ${patient.id}`)
  }

  for (const d of DocumentTemplateData) {
    const template = await prisma.documentTemplate.upsert({
      where: { eventType: d.eventType },
      update: {},
      create: d,
    })
    console.log(`Created documentTemplates with id: ${template.id}`)
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
