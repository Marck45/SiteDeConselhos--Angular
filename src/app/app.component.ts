import { Component, OnInit } from '@angular/core';
import { Mensagens } from './models/mesagens';
import { MensagemApiService } from './services/mensagem-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Conselho do Dia';

  novasMsg: Mensagens[] = [];


  constructor(private mensagemApiService: MensagemApiService){}

  ngOnInit(){

    this.getMensagens();
    
  }
  

  getMensagens(){
    this.mensagemApiService.getMensagem().subscribe((novasMsg: Mensagens[]) =>{

      this.novasMsg = novasMsg;

      console.log(novasMsg);


    })
  }
}
