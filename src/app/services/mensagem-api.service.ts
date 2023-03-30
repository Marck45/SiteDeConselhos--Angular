import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Mensagens } from '../models/mesagens';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})




export class MensagemApiService {

  url = 'https://api.adviceslip.com/advice' // Api para consumo das mensagens

  constructor( private httpClient: HttpClient ) {}

  //Headers

  httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json'})

  }


  //Chama as mensagem disponiveis
  
  getMensagem(): Observable <Mensagens[]> {

    return this.httpClient.get<Mensagens[]>(this.url).pipe(retry(2), catchError(this.handleError));
    
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
