import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from "./dto/create-todo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Todo, TodoDocument } from "./schemas/todo.schema";
import { Model } from 'mongoose';
import {UpdateTodoDto} from "./dto/update-todo.dto";


@Injectable()
export class TodosService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {
    }

    async getAll(): Promise<Todo[]> {
        return this.todoModel.find().exec()
    }

    async create(todoDto: CreateTodoDto): Promise<Todo> {
        const newTodo = new this.todoModel(todoDto)
        return newTodo.save();
    }

    async remove(id: string): Promise<Todo> {
        return this.todoModel.findByIdAndRemove(id)
    }

    async update(id: string, todoDto: UpdateTodoDto): Promise<Todo> {
        return this.todoModel.findByIdAndUpdate(id, todoDto, {new: true})
    }
}
