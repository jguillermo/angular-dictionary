import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FireDictionaryService} from "../../services/fire-dictionary.service";


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
  providers: [ FireDictionaryService ]
})
export class DictionaryComponent implements OnInit {


  constructor(public _fds: FireDictionaryService) {
    this._fds.getList('hola')
      .subscribe(() => {
        console.log("Mensajes cargados...");
      });
  }

  ngOnInit() {
  }

  sendform(forma: NgForm) {
    console.log('formulario enviado');
    console.log(forma.value);
  }

}
