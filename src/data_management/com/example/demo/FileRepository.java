package com.example.demo;

import com.example.FileMetadata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<FileMetadata, Long> {
}
