import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 featuredWritings = [
    {
      id: 1,
      type: 'Poème',
      title: 'Murmures de l\'Aube',
      excerpt: 'Dans le silence de l\'aube naissante, les mots dansent sur les lèvres du vent...',
      date: '15 Décembre 2024'
    },
    {
      id: 2,
      type: 'Slam',
      title: 'Échos Urbains',
      excerpt: 'Les rues racontent leurs histoires, dans un rythme effréné qui pulse au cœur de la ville...',
      date: '12 Décembre 2024'
    },
    {
      id: 3,
      type: 'Citation',
      title: 'Perles de Sagesse',
      excerpt: '"La poésie est le langage que parlent les étoiles quand elles veulent toucher nos âmes."',
      date: '10 Décembre 2024'
    }
  ];
}
