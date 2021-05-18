import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor'

export default class ProfessoresController {
  public async index ({}: HttpContextContract) {
    const professores = await Professor.all()

    return professores
  }

  public async store ({request}: HttpContextContract) {
    const data = request.only(['nome', 'email', 'matricula', 'nascimento'])

    const professor = await Professor.create(data)

    return professor
  }

  public async show ({params}: HttpContextContract) {
    const professor = await Professor.findOrFail(params.id)

    return professor
  }

  public async update ({request, params}: HttpContextContract) {
    const professor = await Professor.findOrFail(params.id)
    const data = request.only(['nome', 'email','matricula','nascimento'])

    professor.merge(data)

    await professor.save()

    return professor
  }

  public async destroy ({params}: HttpContextContract) {
    const professor = await Professor.findOrFail(params.id)

    await professor.delete()
  }
}
