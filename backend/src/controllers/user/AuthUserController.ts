import {Request, Response} from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

class AuthUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body//Pega o que o usuário está mandando

        const authUserService = new AuthUserService()// iniciando o serviço

        const auth = await authUserService.execute({
            email,
            password
        })

        return res.json(auth)
    }
}

export { AuthUserController }