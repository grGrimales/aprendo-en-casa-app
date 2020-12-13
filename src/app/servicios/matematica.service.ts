import { Injectable  } from '@angular/core';

@Injectable()
export class MatematicaService {

    private matematicas:any[] = [
        {
            pregunta: "",
            img: "assets/img/logo.png"
        }
    ];
    
    constructor() {
console.log("Servicio listo para usarse");
    }

    getMatematicas(){
        return this.matematicas;
    }
}