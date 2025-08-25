import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolicialService, Policial } from '../../services/policial.service';


@Component({

  selector: 'app-cadastro-policiais',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-policiais.component.html',
  styleUrls: ['./cadastro-policiais.component.css']
  
})

export class CadastroPoliciaisComponent {

  policial: Policial = {
    rg_civil: '',
    rg_militar: '',
    cpf: '',
    data_nascimento: '',
    matricula: ''
  };

  constructor(private policialService: PolicialService) { }

  cadastrar() {
    this.policialService.cadastrar(this.policial).subscribe({
      next: () => alert('Policial cadastrado com sucesso!'),
      error: err => console.error('Erro ao cadastrar policial', err)
    });
  }
}
