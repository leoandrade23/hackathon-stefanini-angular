import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "hackathon-angular";
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      { label: "Home", icon: "pi pi-fw pi-home", routerLink: ["/home"] },
      {
        label: "Cadastrar",
        icon: "pi pi-fw pi-user-plus",
        routerLink: ["/cadastro"],
      },
      {
        label: "Buscar por Id",
        icon: "pi pi-fw pi-search",
        routerLink: ["/buscaid"],
      },
      {
        label: "Aniversariantes",
        icon: "pi pi-fw pi-calendar",
        routerLink: ["/aniversario"],
      },
      {
        label: "Primeira Letra",
        icon: "pi pi-fw pi-filter",
        routerLink: ["/inicial"],
      },
      {
        label: "Provedor E-mail",
        icon: "pi pi-fw pi-id-card",
        routerLink: ["/email"],
      },
    ];
  }
}
