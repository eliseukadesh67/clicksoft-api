import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Professor extends BaseModel {
  @column({ isPrimary: true })
  public professor_id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public matricula: string

  @column()
  public nascimento: string
}
