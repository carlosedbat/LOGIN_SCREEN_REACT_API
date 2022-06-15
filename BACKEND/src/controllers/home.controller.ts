import {Request, Response} from 'express'
import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
import {User} from '../services/home.service'

dotenv.config();

export const login = async(req:Request, res:Response)=>{
    if(req.body.email && req.body.password){
        let email: string = req.body.email as string;
        let password:string = req.body.password as string;
        let user = await User.findOneUser(email,password);
        //let users = await User.findAll()
        try {
            if(user[0].id){
                const token = JWT.sign(
                    {id:user[0].id,name:user[0].name, email:user[0].email},
                    process.env.JWT_KEY as string,
                    {expiresIn:'2h'}
                );
    
                res.json({
                    token:token,
                    user:{id: user[0].id, name:user[0].name, email:user[0].email}
                })
                return
    
                // res.json({status:true, token: token, userLog: user[0].name});
                // return
            }
        } catch(err){
            res.json({acesso:false})
            return
        }
        
    }
    res.json({status:false})
}

export const InitialScreen = async(req:Request, res:Response)=>{
    
};

export const validateToken =async (req:Request, res:Response) => {
    if(req.body.token){
        const token = req.body.token
           try {
            const decoded = JWT.verify(
                token,
                process.env.JWT_KEY as string
            );

            
            res.json({user:decoded})
            return
           } catch (error) {
                res.json({status:'Token invalido!'})
           }
            return
    }
    res.json({status:'Token invalido!'})
}