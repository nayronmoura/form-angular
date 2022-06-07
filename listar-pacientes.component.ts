import { Component} from '@angular/core';

export interface paciente{
  CPF: number;
  nome: string;
  RG: number;
  emissor: string;
  nascimento: number
  SUS: number;
  mae: string;
  rua: string;
  numero: number;
  bairro: string;
  UF: string;
  celular:number;
  obs: string;
}

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent{
  Dados: paciente[] = [
    {CPF:123,nome:"ABCD",RG:1234,emissor:"SDS",nascimento: Date.now(),
      SUS:123123,mae:"ABCD",rua:"aasdasd",numero:671,bairro:"12312312",UF:"PE",celular:123456789,obs:"AKSDKASDK"}
  ];
  displayedColumns= ['CPF', 'nome', 'RG', 'emissor',"nascimento",
    "SUS","mae","rua","numero","bairro","UF","obs"];
  data = this.Dados;
}
