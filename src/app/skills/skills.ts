import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = input.required<string[]>();

  skillSelected = output<string>();

  selectSkill(skill: string) {
    this.skillSelected.emit(skill);
  }
}

