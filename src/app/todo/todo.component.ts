import { Component } from '@angular/core';
import { Task } from "../../shared/task";
import {remult} from "remult";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks:Task[] = [];
  taskRepo = remult.repo(Task);
  ngOnInit() {
    this.taskRepo.find().then(tasks => this.tasks = tasks);
  }
}
