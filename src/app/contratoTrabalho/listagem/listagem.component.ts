import { Component, OnInit } from '@angular/core';
import { ContratosTrabalhosService } from '../contratos-trabalhos.service';
import { contratoTrabalho } from '../contratoTrabalho.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent implements OnInit {

  contratosTrabalho: contratoTrabalho[] = [];

  constructor(
    private contratoTrabalhoService: ContratosTrabalhosService
  ) { }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void{
    this.contratoTrabalhoService.listarContratoTrabalho().subscribe((res) => {
      this.contratosTrabalho = res;
    })
  }



}
