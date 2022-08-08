import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = '';
  hayError:boolean = false;
  paises:Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe( 
      {
        next: (response) => {
          this.paises = response;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      }
    );
  }

}
