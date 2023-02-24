import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { BuscaIdComponent } from "./busca-id/busca-id.component";
import { AniversarioComponent } from "./aniversario/aniversario.component";
import { InicialComponent } from "./inicial/inicial.component";
import { EmailComponent } from "./email/email.component";

const routes: Routes = [
  //{ path: "", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "cadastro/:id", component: CadastroComponent },
  { path: "buscaid", component: BuscaIdComponent },
  { path: "aniversario", component: AniversarioComponent },
  { path: "inicial", component: InicialComponent },
  { path: "email", component: EmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
