import { Component } from '@angular/core';
import { Task } from "../../shared/task";
import {remult} from "remult";
import {NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TasksController} from "../../shared/tasks.controller";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTaskTitle:string = "";
  async addTask() {
    try {
      const newTask = await this.taskRepo.insert({
        title: this.newTaskTitle
      });
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    } catch (err: any) {
      alert(err.message);
    }
  }
  async deleteTask(task: Task) {
    try {
      await this.taskRepo.delete(task);
      this.tasks = this.tasks.filter(t => t !== task);
    } catch (err: any) {
      alert(err.message);
    }
  }
  async saveTask(task: Task) {
    try {
      await this.taskRepo.save(task);
    } catch (err: any) {
      alert(err.message);
    }
  }
  tasks:Task[] = [];
  taskRepo = remult.repo(Task);
  ngOnInit() {
    this.taskRepo.find({
      where: {
        completed: undefined
      }
    }).then(tasks => this.tasks = tasks);
  }
  async setAllCompleted(completed: boolean) {
    await TasksController.setAllCompleted(completed);
  }
}
