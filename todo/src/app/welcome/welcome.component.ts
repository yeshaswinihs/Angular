import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome message'
  name = ''
  welcomeMessageService:string
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // COMPILATION ERROR this.message = 5
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }
  // getWelcomeMessage(){
  //   console.log(this.service.executeHelloWorldBeanService());
  //   this.service.executeHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error =>this.handleErrorResponse(error)
  //   );

    //console.log("last line of getwelcomemessage");
   // this.service.executeHelloWorldBeanService().subscribe();
    //this.service.executeHelloWorldBeanService().subscribe();
    //console.log("Get welcome message");
  //}

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
     response=> this.handleSuccessfulResponse(response),
     error=> this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageService= response.message;
    console.log(response.message);
  }

  handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
   console.log(error.error.message);
    this.welcomeMessageService= error
  }
 
}
