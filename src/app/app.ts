import { Component, signal } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  imports: [ProfileCard, Header, Skills, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Leewel Nash N. Tumang';
  location = 'Angeles City, Pampanga';
  email = 'nashnicio@gmail.com';
  phone = '0908 266 5332';

  profile = 'I’m an Information Technology student at Holy Angel University, specializing in web development and aspiring to become a UI/UX designer. I use Figma to design and prototype, and HTML, CSS, JavaScript, and Angular to bring those designs to life in code. I’m looking for opportunities to grow as a designer, collaborate with teams, and create clear, easy-to-use digital experiences.';

  skills = [
  'Wireframing and Prototyping',
  'Visual Design (color, typography, layout)',
  'Creativity and Artistic Eye',
  'Angular',
  'Responsive Design',
  'Attention to Detail',
  'Patient and Dedicated',
  'Adaptable and Quick to Learn',
  'Self-Motivated',
  'Team Player with a Positive Attitude'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;

  }
}
