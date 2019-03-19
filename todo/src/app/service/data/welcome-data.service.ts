import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }

   executeHelloWorldServiceWithPathVariable(name) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHeaders();

    //   let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

     return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
     //{headers}
     );
   }

  //  createBasicAuthenticationHeaders() {
  //    let username = 'in28minutes'
  //    let password = 'dummy'
  //    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //    return basicAuthHeaderString;
  //  }
}
// Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.