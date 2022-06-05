import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getZambezia = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'canalizada': pop[2],
      'fontanário/torneira pública': pop[6],
      'furo/poço com bomba manual': pop[7],
      'poço sem bomba manual': pop[8],
      'nascente/rio/lago/lagoa': pop[11],
      'chuva': pop[14],
      'tanques camiões/carregada em tambores': pop[15],
      'mineral/engarrafada': pop[16],
      'outra': pop[17],
      'desconhecida': pop[18]
    }
  }

  const people = {
    'quelimane': getPeople(data[64]),
    'alto molocue': getPeople(data[65]),
    'chinde': getPeople(data[66]),
    'gile': getPeople(data[67]),
    'gurue': getPeople(data[68]),
    'ile': getPeople(data[69]),
    'inhassunge': getPeople(data[70]),
    'lugela': getPeople(data[71]),
    'maganja da Costa': getPeople(data[72]),
    'milange': getPeople(data[73]),
    'mocuba': getPeople(data[74]),
    'mopeia': getPeople(data[75]),
    'morrumbala': getPeople(data[76]),
    'namacurra': getPeople(data[77]),
    'namarroi': getPeople(data[78]),
    'nicoadala': getPeople(data[79]),
    'pebane': getPeople(data[80]),
    'derre': getPeople(data[81]),
    'luabo': getPeople(data[82]),
    'mocubela': getPeople(data[83]),
    'molumbo': getPeople(data[84]),
    'mulevala': getPeople(data[85]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['zambezia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}