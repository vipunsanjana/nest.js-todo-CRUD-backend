import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./todos.entity";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ){}

    async create(dto: CreateTodoDto){
        const todo = this.todoRepository.create(dto);
        return await this.todoRepository.save(todo);
    }

    findMany(){
        return this.todoRepository.find();
    }


    async one(id:number){

        //const todo = await this.todoRepository.findOne({where: {id}});

        return this.todoRepository.find({where: {id}});
    }

    async update(id:number,dto: CreateTodoDto){
        const todo = await this.todoRepository.findOne({where: {id}});

        Object.assign(todo, dto);

        return this.todoRepository.save(todo);
        
    }


    async delete(id:number){
        const todo = await this.todoRepository.findOne({where: {id}});

        
        return this.todoRepository.remove(todo);
        
    }
}
