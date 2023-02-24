import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { UsuarioService } from "./service/usuario.service";
import { BuscaIdComponent } from "./busca-id/busca-id.component";
import { AniversarioComponent } from "./aniversario/aniversario.component";
import { InicialComponent } from "./inicial/inicial.component";
import { EmailComponent } from "./email/email.component";

import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    BuscaIdComponent,
    AniversarioComponent,
    InicialComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputMaskModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
