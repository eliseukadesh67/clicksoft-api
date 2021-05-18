import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public aluno_id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public matricula: number

  @column()
  public nascimento: string

  @column()
  public sala : number
}
