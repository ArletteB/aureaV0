import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {
  inspirations = [
    {
      icon: '🌟',
      title: 'Astronomie',
      description: 'L\'immensité du cosmos inspire la grandeur des sentiments humains'
    },
    {
      icon: '🎵',
      title: 'Musique Classique',
      description: 'Les compositions de Debussy et Chopin nourrissent la mélodie des vers'
    },
    {
      icon: '🌊',
      title: 'Nature',
      description: 'Les éléments naturels reflètent les états d\'âme et les émotions'
    },
    {
      icon: '📚',
      title: 'Littérature',
      description: 'L\'héritage de Rimbaud, Verlaine et Louise Labé guide l\'écriture'
    }
  ];

}
