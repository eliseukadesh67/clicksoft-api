import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public numero: number

  @column({ isPrimary: true })
  public capacidade: number

  @column({ isPrimary: true })
  public disponivel: boolean
}
