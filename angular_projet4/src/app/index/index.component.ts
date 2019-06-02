import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-index',  
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userData: any;

  indexName = "Accueil";  

  constructor(private usersService : UsersService) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    this.userData = {
      nom: form.value['nom'],
      mail: form.value['mail'],
      mdp: form.value['mdp']
    };

    this.usersService.createUser(this.userData);

  }

}
