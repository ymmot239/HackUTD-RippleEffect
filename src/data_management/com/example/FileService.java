package com.example;

import com.example.demo.FileRepository;
import org.springframework.stereotype.Service;

@Service
public class FileService {

    private final FileRepository fileRepository;

    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    // Save file metadata to the database
    public FileMetadata saveFile(String fileName, String cid) {
        FileMetadata file = new FileMetadata(fileName, cid);
        return fileRepository.save(file);
    }

    // Retrieve all file metadata
    public Iterable<FileMetadata> getAllFiles() {
        return fileRepository.findAll();
    }
}
