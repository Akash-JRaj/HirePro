package dev.akash.joblisting.controller;

import dev.akash.joblisting.model.Post;
import dev.akash.joblisting.repository.PostRepository;
import dev.akash.joblisting.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

//Job post controller
@RestController
public class PostController {

    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository sRepo;
    @RequestMapping(value = "/")
    @ApiIgnore
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @CrossOrigin
    @GetMapping(value = "/posts")
    public List<Post> getAllPosts() {
        return repo.findAll();
    }

    @CrossOrigin
    @GetMapping("/posts/{text}")
    public List<Post> search(@PathVariable String text) {
        return sRepo.findByText(text);
    }

    @CrossOrigin
    @PostMapping(value = "/post")
    public Post addPost(@RequestBody Post post) {
        return repo.save(post);
    }
}
