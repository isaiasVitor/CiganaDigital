import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class UserProvider {
  private API_URL = 'http://13.57.204.215/public/index.php/api/';
  constructor(public http: Http) {
    
  }

    getNome(pesquisa){
      return new Promise((resolve,reject) => {
        let url = this.API_URL + 'getNome';
        this.http.post(url,pesquisa)
          .subscribe((result: any) => {
            resolve(result.json());
            console.log(result.json())
          }, 
          (error) => {
            reject(error.json());
            
          })
        });
      };

    getAllSignos(){
      return new Promise((resolve,reject) => {
        let url = this.API_URL + 'getSigno';
        this.http.get(url)
          .subscribe((result: any) => {
            resolve(result.json());
          }, 
          (error) => {
            reject(error.json());
          })
        });
      };  
  }
