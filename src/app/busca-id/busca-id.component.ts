import { Component, OnInit } from "@angular/core";

import { UsuarioService } from "../service/usuario.service";
import { Usuario } from "../Objetos/Usuario";

@Component({
  selector: "app-busca-id",
  templateUrl: "./busca-id.component.html",
  styleUrls: ["./busca-id.component.css"],
})
export class BuscaIdComponent implements OnInit {
  usuarios: Array<Usuario> = [];

  mostrar: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  buscarPorId(id: number) {
    console.log(id);
    this.usuarioService.buscaPorId(id).subscribe((user) => {
      this.usuarios.push(user);
      this.mostrar = true;
    });
  }
}
