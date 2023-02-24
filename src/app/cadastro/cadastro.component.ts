import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from "../Objetos/Usuario";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  id: any;
  usuario: Usuario = new Usuario();
  tituloPagina: String = "Cadastrar Usuário";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros) => {
      if (parametros["id"]) {
        this.tituloPagina = "Editar Usuário";
        this.id = parametros["id"];
        this.usuarioService.buscaPorId(this.id).subscribe((user) => {
          this.usuario = user;
        });
      }
    });
  }

  adicionarUsuario() {
    if (this.tituloPagina == "Cadastrar Usuário") {
      console.log(this.usuario);
      this.usuarioService.adicionarUsuario(this.usuario).subscribe();
    } else {
      this.editarUsuario();
    }
    this.router.navigate(["home"]);
  }

  editarUsuario() {
    this.usuarioService.editarUsuario(this.usuario).subscribe();
  }
}
