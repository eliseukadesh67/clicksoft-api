import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  public sala_id: number

  @column()
  public numero: number

  @column()
  public capacidade: number

  @column()
  public disponivel: boolean
}
