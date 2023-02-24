import { Component, OnInit } from "@angular/core";
import { Usuario } from "../Objetos/Usuario";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-inicial",
  templateUrl: "./inicial.component.html",
  styleUrls: ["./inicial.component.css"],
})
export class InicialComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  mostrar: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  buscarPrimeiraLetra(letra: string) {
    this.usuarioService.buscarPrimeiraLetra(letra).subscribe((users) => {
      this.usuarios = users;
      this.mostrar = true;
    });
  }
}
