/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */

import { Patient, PrismaClient, Role, User } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  const userData: Omit<User, 'id' | 'lastConnection'>[] = [
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
  const patientData: Omit<Patient, 'created' | 'updated' | 'deleted'>[] = [
    {
      id: '1',
      firstName: 'Wathik',
      lastName: 'Takdemt',
      ddn: new Date(1986, 6, 27),
      fullName: 'Takdemt Wathik',
      nTel: ['0557506276'],
      sexe: 'M',
    },
    {
      id: '2',
      firstName: 'Afaf',
      lastName: 'Mellak',
      ddn: new Date(1989, 4, 14),
      fullName: 'Mellak Afaf',
      nTel: [],
      sexe: 'F',
    },
    {
      id: '3',
      firstName: 'Kamal',
      lastName: 'Takdemt',
      ddn: new Date(1957, 4, 17),
      fullName: 'Takdemt Kamal',
      nTel: [],
      sexe: 'M',
    },
    {
      id: '4',
      firstName: 'Fatiha',
      lastName: 'Boudjella',
      ddn: new Date(1957, 7, 27),
      fullName: 'Boudjella Fatiha',
      nTel: [],
      sexe: 'F',
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
