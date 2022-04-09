import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Cliente {
  cliente: string;
  contato: string;
  id: string;
  servico: number;
}

enum Servico {
  'Cabelo',
  'Barba',
  'Combo'
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  url = 'http://www.lucasreno.kinghost.net/barbearia';
  clientes: Cliente[] = [];
  servico: typeof Servico = Servico;
  constructor(public httpClient: HttpClient) { }

  list() {
    this.httpClient.get<Cliente[]>(this.url).subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  ngOnInit(): void {
    setInterval(() => this.list(), 1000);
  }

}
