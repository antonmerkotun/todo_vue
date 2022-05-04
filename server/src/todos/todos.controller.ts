import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put} from '@nestjs/common';
import {CreateTodoDto} from './dto/create-todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';
import {TodosService} from './todos.service';
import {Todo} from './schemas/todo.schema';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {
    };

    @Get()
    getAll(): Promise<Todo[]> {
        return this.todosService.getAll();
    };

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() newTodo: CreateTodoDto) {
        return this.todosService.create(newTodo);
    };

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.todosService.remove(id);
    };

    @Put(':id')
    update(@Body() updateTodo: UpdateTodoDto, @Param('id') id:string) {
        return this.todosService.update(id, updateTodo);
    };
}
