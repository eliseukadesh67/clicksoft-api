import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'

export default class SalasController {
  public async index ({}: HttpContextContract) {
    const salas = await Sala.all()

    return salas
  }

  public async store ({request}: HttpContextContract) {
    let data = request.only(['numero', 'capacidade', 'disponivel'])

    const sala = await Sala.create(data)

    return sala
  }

  public async show ({params}: HttpContextContract) {
    const sala = await Sala.findOrFail(params.id)

    return sala
  }

  public async update ({request, params}: HttpContextContract) {
    const sala = await Sala.findOrFail(params.id)
    const data = request.only(['numero','capacidade','disponivel'])

    sala.merge(data)

    await sala.save()

    return sala
  }

  public async destroy ({params}: HttpContextContract) {
    const sala = await Sala.findOrFail(params.id)

    await sala.delete()
  }
}
