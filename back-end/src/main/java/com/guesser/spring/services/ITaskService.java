package com.guesser.spring.services;

import java.util.List;
import java.util.Optional;

import com.guesser.spring.entities.Task;

public interface ITaskService {

    List<Task> findAll();
    Optional<Task> findOne(Long id);
    Task create(Task task);
}
