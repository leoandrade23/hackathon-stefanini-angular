import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../Objetos/Usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  readonly apiURL: string;

  constructor(private $http: HttpClient) {
    this.apiURL = "http://localhost:8080/api";
  }

  listarUsuarios() {
    return this.$http.get<Usuario[]>(`${this.apiURL}/usuarios`);
  }

  buscaPorId(id: number) {
    return this.$http.get<Usuario>(`${this.apiURL}/usuarios/${id}`);
  }

  excluirUsuario(id: number) {
    return this.$http.delete(`${this.apiURL}/usuarios/${id}`);
  }

  adicionarUsuario(usuario: Usuario) {
    return this.$http.post(`${this.apiURL}/usuarios`, usuario);
  }

  editarUsuario(usuario: Usuario) {
    return this.$http.put(`${this.apiURL}/usuarios/${usuario.id}`, usuario);
  }

  buscarAniversariantes(mes: number) {
    return this.$http.get<Usuario[]>(
      `${this.apiURL}/usuarios/aniversariantes/${mes}`
    );
  }

  buscarPrimeiraLetra(letra: String) {
    return this.$http.get<Usuario[]>(
      `${this.apiURL}/usuarios/inicial/${letra}`
    );
  }

  listarProvedores() {
    return this.$http.get(`${this.apiURL}/usuarios/email`);
  }
}
