package com.backend.api.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;



@Data
@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noteId;
    private String title;
    private String content;
    private boolean pinned;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime dueDate;
    private Integer priorityId;
    private Integer statusId;
    private Integer notebookId;
    private Integer createdBy;
    private Integer assignedTo;
    private boolean deleted;
    private boolean archived;
	public void setNoteId(Long id) {
		this.noteId = id;		
	}
	public String getTitle() {
		return this.title;
	}
	public void setTitle(String title) {
		this.title = title;		
	}
	public String getContent() {
		return this.content;
	}
	public void setContent(String content) {
		this.content = content;		
	}

}