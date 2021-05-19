/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/alunos', 'AlunosController.index')
Route.get('/alunos_sala/:sala', 'AlunosController.indexBysala')
Route.post('/alunos', 'AlunosController.store')
Route.get('/alunos/:id', 'AlunosController.show')
Route.put('/alunos/:id', 'AlunosController.update')
Route.put('/alunos/', 'AlunosController.insert_sala')
Route.delete('/alunos/:id', 'AlunosController.destroy')

Route.get('/professores', 'ProfessoresController.index')
Route.post('/professores', 'ProfessoresController.store')
Route.get('/professores/:id', 'ProfessoresController.show')
Route.put('/professores/:id', 'ProfessoresController.update')
Route.delete('/professores/:id', 'ProfessoresController.destroy')

Route.get('/salas', 'SalasController.index')
Route.post('/salas', 'SalasController.store')
Route.get('/salas:id', 'SalasController.show')
Route.put('/salas/:id', 'SalasController.update')
Route.delete('/salas/:id', 'SalasController.destroy')
