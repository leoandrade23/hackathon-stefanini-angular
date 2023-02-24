import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from "../Objetos/Usuario";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  usuario: Usuario = new Usuario();

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe((users) => {
      this.usuarios = users;
    });
  }

  excluirUsuario(usuario: Usuario) {
    this.usuarioService.excluirUsuario(usuario.id).subscribe();
    this.router.navigate(["home"]);
  }

  editarUsuario(usuario: Usuario) {
    this.router.navigate(["cadastro", usuario.id]);
  }
}
