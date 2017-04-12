import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Os providers servem para realizar conexões externas. Ele será utilizado aqui para conexão
//a uma API de CEP. Ele pode ser comparado ao service do android, etc..
//Para criar um provider por CLI: ionic g provider [nomeDoSeuProvider]

//OBS: Com o decorator abaixo, Injectable, podemos injetar o objeto da classe em algum parametro
//sem a necessidade de instância-la.
@Injectable()
export class ConnectionService {
  constructor(public http: Http) {}
  //Estou utilizando promise como retorno da função abaixo.
  //Promise é um objeto usado para processamento assincrono. É um valor que pode estar
  //disponível agora, no futuro ou nunca.
  //O angular 2 trabalha com Observable que é um objeto de requisições também. Porém, o
  //toPromise converterá para Promise.
  getCep(cep : string) : Promise<Response> {
    return this.http.get('https://viacep.com.br/ws/'+cep.trim()+'/json/').toPromise();
  }
}
