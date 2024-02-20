package dev.akash.joblisting.repository;

import dev.akash.joblisting.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}
