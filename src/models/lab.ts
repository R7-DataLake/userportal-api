import { Knex } from 'knex'
import { ILabInsert, ILabMapping, ILabUpdate } from '../../@types/lab'
export class LabModel {

  constructor () { }

  bulkInsert(db: Knex, data: ILabInsert[]) {
    return db('labs')
      .insert(data)
      .onConflict(['code', 'hospcode'])
      .merge(['name', 'lab_group_code', 'user_id', 'updated_at'])
  }

  save(db: Knex, data: ILabInsert) {
    return db('labs')
      .insert(data)
      .onConflict(['code', 'hospcode'])
      .merge(['name', 'lab_group_code', 'user_id', 'updated_at'])
  }

  update(db: Knex, hospcode: any, code: any, data: ILabUpdate) {
    return db('labs')
      .update(data)
      .where({ code, hospcode })
  }

  remove(db: Knex, code: any, hospcode: any) {
    return db('labs')
      .where({ code, hospcode })
      .del()
  }

  mapping(db: Knex, data: ILabMapping) {
    return db('lab_mappings')
      .insert(data)
      .onConflict(['code', 'hospcode'])
      .merge(['f43', 'loinc', 'nhso', 'updated_at'])
  }

}