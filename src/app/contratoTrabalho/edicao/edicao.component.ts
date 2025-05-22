import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratosTrabalhosService } from '../contratos-trabalhos.service';
import { contratoTrabalho } from '../contratoTrabalho.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {

  contratotrabalho?: contratoTrabalho;
  private id!: number;
  hora: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contratoTrabalhoService: ContratosTrabalhosService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarContratoTrabalho();
  }

  carregarContratoTrabalho(): void {
    if (!this.id || isNaN(this.id)) {
      this.router.navigate(['/listagem']);
      return;
    }

    this.contratoTrabalhoService.buscaContratoTrabalho(this.id).subscribe((ct) => {
      this.hora = ct.cargaHoraria;

      this.contratotrabalho = {
        ...ct,
        inicioVigencia: ct.inicioVigencia ? new Date(ct.inicioVigencia).toISOString().split('T')[0] : '',
        fimVigencia: ct.fimVigencia ? new Date(ct.fimVigencia).toISOString().split('T')[0] : '',
      }

    });
  }

  salvar(): void {
    if (!this.contratotrabalho) return

    this.contratotrabalho.inicioVigencia = new Date(this.contratotrabalho.inicioVigencia).toISOString();
    this.contratotrabalho.fimVigencia = new Date(this.contratotrabalho.fimVigencia).toISOString();
    this.contratotrabalho.cargaHoraria = this.hora;

    this.contratoTrabalhoService.atualizarContratoTrabalho(this.id, this.contratotrabalho).subscribe(() => {
      this.router.navigate(['/listagem']);
    })

  }

  cancelar() {
    this.router.navigate(['/listagem']);
  }

  formatarHora(event: any): void {
    let valor = event.target.value;
    valor = valor.replace(/\D/g, '');

    if (valor.length > 4) {
      valor = valor.substring(0, 4);
    }

    if (valor.length > 2) {
      valor = valor.substring(0, 2) + ':' + valor.substring(2, 4);
    }

    this.hora = valor;
    event.target.value = valor;
  }
}
