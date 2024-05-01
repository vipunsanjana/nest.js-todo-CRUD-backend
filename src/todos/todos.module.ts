import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todos.entity";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";

 @Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodosController],
    providers: [TodosService],
 })
 export class TodosModule {}