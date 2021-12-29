package com.gefersonholdorf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gefersonholdorf.entities.Game;

public interface GameRepository extends JpaRepository<Long, Game>{

}
