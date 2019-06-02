import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:9191/api';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

  constructor(private http: HttpClient, private router: Router  ) { }

    createUser(userData:string){
      //utilisation de la méthode post
      this.http.post(this.url + '/user/signup', userData, this.httpOptions).subscribe(
        res => {
          console.log(res);
        
      },
      err => {
          console.log(err);
      })
         

   }
}