import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { CreateUserparams, UpdateUserparams,  } from "src/utils/types";
import { Repository } from "typeorm";  


@Injectable()
export class UsersService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
    
    ){}

    fetchusers(){
        return this.userRepository.find();

    }

    createUser(userDetails: CreateUserparams){
        const newUSer=this.userRepository.create({
            ...userDetails,
            createdAt:new Date(),
            
        });
        this.userRepository.save(newUSer);
    } 
    updateUser(id:number,updateUserDetails:UpdateUserparams){
        return this.userRepository.update({id},{...updateUserDetails});
        

    }
  deleteUser(id:number){
    return this.userRepository.delete({id});
  }


}  