package com.todoapp.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.todoapp.project.model.Todo;
import com.todoapp.project.service.TodoService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/todos/{id}")
    public Todo getTodoById(@PathVariable(value = "id") long id) {
        return todoService.getTodoById(id);
    }
    
    @PostMapping("/todos")
    public Todo createTodo(@Validated @RequestBody Todo todo) {
        return todoService.saveOrUpdate(todo);
    }

    @PutMapping("/todos/{id}")
    public Todo updateTodo(@PathVariable(value = "id") long id, @Validated @RequestBody Todo todo) {
        Todo existingTodo = todoService.getTodoById(id);
        existingTodo.setTitle(todo.getTitle());
        existingTodo.setDescription(todo.getDescription());
        existingTodo.setCompleted(todo.isCompleted());
        return todoService.saveOrUpdate(existingTodo);
    }

    @DeleteMapping("/todos/{id}")
    public void deleteTodoById(@PathVariable(value = "id") long id) {
        todoService.deleteTodoById(id);
    }

    @GetMapping("/todos/completed")
    public List<Todo> getCompletedTodos() {
        return todoService.getCompletedTodos();
    }
}
