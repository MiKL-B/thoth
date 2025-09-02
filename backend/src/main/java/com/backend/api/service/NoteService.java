package com.backend.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.api.model.Note;
import com.backend.api.repository.NoteRepository;


@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note getNoteById(Long id) {
        return noteRepository.findById(id).orElse(null);
    }

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    public Optional<Note> updateNote(Long id, Note newNoteData) {
        return noteRepository.findById(id).map(existingNote -> {
            existingNote.setTitle(newNoteData.getTitle());
            existingNote.setContent(newNoteData.getContent());
            return noteRepository.save(existingNote);
        });
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
}