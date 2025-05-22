import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contratoTrabalho } from '../contratoTrabalho.model';
import { ContratosTrabalhosService } from '../contratos-trabalhos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {

  contratotrabalho: contratoTrabalho = {
    //id: 0,
    nivelTecnico: 0,
    cargaHoraria: '',
    status: '',
    inicioVigencia: '',
    fimVigencia: ''
  };

  constructor(
    private contratoTrabalhoService: ContratosTrabalhosService,
    private router: Router
  ){}

  salvar(){

    this.contratotrabalho.inicioVigencia = new Date(this.contratotrabalho.inicioVigencia).toISOString();
    this.contratotrabalho.fimVigencia = new Date(this.contratotrabalho.fimVigencia).toISOString();

    if(this.contratotrabalho.inicioVigencia > this.contratotrabalho.fimVigencia){
      alert('O início de vigência deve ser inferior ao fim de vigência');
    } else{
      this.contratoTrabalhoService.cadastrarContratoTrabalho(this.contratotrabalho).subscribe(() =>{
        this.router.navigate(['/listagem']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listagem']);
  }

  onHoraInput(event: any): void {
    let input = event.target.value.replace(/\D/g, '');

    if (input.length >= 3) {
      input = input.substring(0, 2) + ':' + input.substring(2, 4);
    }

    event.target.value = input.substring(0, 5);

    this.contratotrabalho.cargaHoraria = event.target.value;
  }


}
