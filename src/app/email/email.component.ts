import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.css"],
})
export class EmailComponent implements OnInit {
  //provedores: Object;
  provedores: Array<Object> = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService
      .listarProvedores()
      .subscribe((provedor) => this.provedores.push(provedor));
  }
}
