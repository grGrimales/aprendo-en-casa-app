import { Component, OnInit } from '@angular/core';
import { MatematicaService} from '../../servicios/matematica.service';

@Component({
  selector: 'app-matematicas',
  templateUrl: './matematicas.component.html',
  styleUrls: ['./matematicas.component.css']
})
export class MatematicasComponent implements OnInit {

  constructor( private _MATEMATICASSERVICE:MatematicaService) { }

  ngOnInit(): void {
  }

}
