package com.todoapp.project.service;

import java.util.List;

import com.todoapp.project.model.Todo;

public interface TodoService {
    List<Todo> getAllTodos();
    Todo getTodoById(long id);
    Todo saveOrUpdate(Todo todo);
    void deleteTodoById(long id);
    List<Todo> getCompletedTodos();
}
