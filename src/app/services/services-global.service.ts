import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAmoutCalled, ICalled, INewCalled } from './IChamados';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesGlobalService {

  API = environment.API;

  allCalledUrl = `${this.API}/todos-chamados`;
  amountCalledUrl = `${this.API}/quantidade-chamados`;
  calledByIdUrl = `${this.API}/visualizar-chamado/`;
  newCalledUrl = `${this.API}/novo-chamado/`;
  deleteCalledUrl = `${this.API}/exclui-chamado/`;
  executeCalledUrl = `${this.API}/executa-chamado/`;
  finishCalledUrl = `${this.API}/finaliza-chamado/`;

  constructor(private httpClient: HttpClient) { }

  getAllCalledAPI() {
    return this.httpClient.get<ICalled[]>(this.allCalledUrl);
  }

  getAmountCalledAPI() {
    return this.httpClient.get<IAmoutCalled[]>(this.amountCalledUrl);
  }

  getCalledByidAPI(id: number){
    return this.httpClient.get<ICalled[]>(`${this.calledByIdUrl}${id}`)
  }

  newCalledAPI(title: string, author: string, description: string) {
    const called = {
      titulo: title,
      autor: author,
      descricao: description
    }

    return this.httpClient.post<INewCalled[]>(this.newCalledUrl, called)
  }

  executeCalledAPI(id: number, responsible: string) {
    const called = {
      id: id,
      responsavel: responsible
    }

    return this.httpClient.put<INewCalled[]>(this.executeCalledUrl, called)
  }

  deleteCalledAPI(id: number) {
    return this.httpClient.delete(`${this.deleteCalledUrl}${id}`);
  }

  finishCalledAPI(id: number, solutions: string) {
    const called = {
      id: id,
      solucao: solutions
    }

    return this.httpClient.put<INewCalled[]>(this.finishCalledUrl, called)
  }
}
