import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'website-barbearia';
  url = 'http://www.lucasreno.kinghost.net/barbearia';
  clientes = [];

  constructor (public httpClient : HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe(resposta => {
      console.log(resposta);
    })
  }
}
