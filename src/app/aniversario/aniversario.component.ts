import { Component, OnInit } from "@angular/core";
import { Usuario } from "../Objetos/Usuario";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-aniversario",
  templateUrl: "./aniversario.component.html",
  styleUrls: ["./aniversario.component.css"],
})
export class AniversarioComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  mostrar: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  buscarAniversariantes(mes: number) {
    this.usuarioService.buscarAniversariantes(mes).subscribe((users) => {
      this.usuarios = users;
      this.mostrar = true;
    });
  }
}
