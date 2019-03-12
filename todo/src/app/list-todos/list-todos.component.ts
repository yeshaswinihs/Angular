import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(public id: number,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date) {
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message: string
  // todos = [
  //   new Todo(1, "Learn JAVA", false, new Date()),
  //   new Todo(2, "Learn Spring", false, new Date()),
  //   new Todo(3, "Learn Hibernate", false, new Date())
  // ]

  constructor(
    private service: TodoDataService
  ) { }

 

  ngOnInit() {
   this.refreshTodos() 

  }

  refreshTodos(){
    this.service.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response
      }
    );
  }
  
  deleteTodo(id) {
    this.service.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete todo ${id} successfull`
        this.refreshTodos()
      }
    )
  }

}
