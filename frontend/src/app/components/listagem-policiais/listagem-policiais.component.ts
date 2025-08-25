import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicialService, Policial } from '../../services/policial.service';  


@Component(
  {
  selector: 'app-listagem-policiais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem-policiais.component.html',
  styleUrls: ['./listagem-policiais.component.css']
})


export class ListagemPoliciaisComponent implements OnInit {
  policiais: Policial[] = [];

  constructor(private policialService: PolicialService) {}

  ngOnInit() {
  
    this.policialService.listar().subscribe({
      next: (data) => this.policiais = data,
      error: (err) => console.error('Erro ao listar policiais', err)
      
    });
  }
}
