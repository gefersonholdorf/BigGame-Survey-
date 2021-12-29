package com.gefersonholdorf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gefersonholdorf.entities.Genre;

public interface GenreRepository extends JpaRepository<Long, Genre>{

}
