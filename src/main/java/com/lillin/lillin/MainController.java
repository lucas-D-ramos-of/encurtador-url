package com.lillin.lillin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String root(){
        return "login";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/encurtador-link")
    public String encurtador(){
        return "encurtador-link";
    }

    @GetMapping("/trocar-senha")
    public String trocarSenha() { return "trocar-senha"; }

    @GetMapping("/cadastro")
    public String cadastro() { return "cadastro"; }

    @GetMapping("/sobre")
    public String sobre() { return "sobre"; }

    @GetMapping("/historico")
    public String historico() { return "historico"; }

}
