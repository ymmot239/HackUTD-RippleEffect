package com.example;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class FileMetadata {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key for the table

    private String fileName; // Name of the file
    private String cid; // Content Identifier (CID) from IPFS
    private LocalDateTime uploadDate; // Date and time of upload

    // Default constructor (required by JPA)
    public FileMetadata() {
    }

    // Constructor with parameters
    public FileMetadata(String fileName, String cid) {
        this.fileName = fileName;
        this.cid = cid;
        this.uploadDate = LocalDateTime.now(); // Set the current date and time
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public LocalDateTime getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(LocalDateTime uploadDate) {
        this.uploadDate = uploadDate;
    }

    @Override
    public String toString() {
        return "FileMetadata{" +
                "id=" + id +
                ", fileName='" + fileName + '\'' +
                ", cid='" + cid + '\'' +
                ", uploadDate=" + uploadDate +
                '}';
    }
}
