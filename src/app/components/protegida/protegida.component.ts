import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-protegida',
    templateUrl: './protegida.component.html',
    styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

    constructor(public auth: AuthService) { }

    ngOnInit() {
        console.log('ngOnInit protegida');
        this.auth.userProfile$.subscribe(perfil => {
            console.log(perfil);
        }); // es un observable por lo que requiere un subscribe()
    }

}
