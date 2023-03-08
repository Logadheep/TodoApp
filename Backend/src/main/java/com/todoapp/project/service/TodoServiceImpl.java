package com.todoapp.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoapp.project.model.Todo;
import com.todoapp.project.repository.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo getTodoById(long id) {
        return todoRepository.findById(id).orElse(null);
    }

    @Override
    public Todo saveOrUpdate(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public void deleteTodoById(long id) {
        todoRepository.deleteById(id);
    }

    @Override
    public List<Todo> getCompletedTodos() {
        return todoRepository.findByCompleted(true);
    }
}
