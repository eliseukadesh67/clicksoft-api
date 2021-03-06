import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from '../../Models/Aluno'

export default class AlunosController {
  public async index ({}: HttpContextContract) {
    const alunos = await Aluno.all()

    return alunos
  }

  public async indexBysala ({params}: HttpContextContract) {
    const alunos = await Aluno.all()

    return alunos.filter(aluno => aluno.sala === params.sala)
  }

  public async store ({request}: HttpContextContract) {
    const data = request.only(['nome', 'email', 'matricula', 'nascimento'])

    const aluno = await Aluno.create(data)

    return aluno
  }

  public async show ({params}: HttpContextContract) {
    const aluno = await Aluno.findOrFail(params.id)

    return aluno
  }

  public async update ({request, params}: HttpContextContract) {
    const aluno = await Aluno.findOrFail(params.id)
    const data = request.only(['nome', 'email','matricula','nascimento'])

    aluno.merge(data)

    await aluno.save()

    return aluno
  }

  public async insert_sala ({request}: HttpContextContract) {
    const aluno = await Aluno.findOrFail(request.body().aluno_id)
    const data = request.only(['sala'])

    aluno.merge(data)

    await aluno.save()

    return aluno
  }

  public async destroy ({params}: HttpContextContract) {
    const aluno = await Aluno.findOrFail(params.id)

    await aluno.delete()
  }
}
