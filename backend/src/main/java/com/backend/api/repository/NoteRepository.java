package com.backend.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.api.model.Note;



public interface NoteRepository extends JpaRepository<Note, Long> {


}