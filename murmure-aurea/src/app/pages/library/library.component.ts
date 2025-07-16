import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
    writingTypes = ['Tous', 'Poème', 'Slam', 'Citation'];
  selectedFilter = 'Tous';
  searchQuery = '';
  filteredWritings: any[] = [];

  allWritings = [
    {
      id: 1,
      type: 'Poème',
      title: 'Murmures de l\'Aube',
      excerpt: 'Dans le silence de l\'aube naissante, les mots dansent sur les lèvres du vent, portant avec eux les secrets de la nuit...',
      date: '15 Décembre 2024',
      readingTime: '3 min',
      wordCount: 120
    },
    {
      id: 2,
      type: 'Slam',
      title: 'Échos Urbains',
      excerpt: 'Les rues racontent leurs histoires, dans un rythme effréné qui pulse au cœur de la ville moderne...',
      date: '12 Décembre 2024',
      readingTime: '2 min',
      wordCount: 95
    },
    {
      id: 3,
      type: 'Citation',
      title: 'Perles de Sagesse',
      excerpt: '"La poésie est le langage que parlent les étoiles quand elles veulent toucher nos âmes."',
      date: '10 Décembre 2024',
      readingTime: '1 min',
      wordCount: 25
    },
    {
      id: 4,
      type: 'Poème',
      title: 'Sérénité Nocturne',
      excerpt: 'Sous le voile étoilé de la nuit profonde, les pensées s\'élèvent comme des volutes d\'encens...',
      date: '8 Décembre 2024',
      readingTime: '4 min',
      wordCount: 150
    },
    {
      id: 5,
      type: 'Slam',
      title: 'Révolution Silencieuse',
      excerpt: 'Dans le fracas du quotidien, une révolution silencieuse s\'opère, celle des mots qui libèrent...',
      date: '5 Décembre 2024',
      readingTime: '3 min',
      wordCount: 110
    },
    {
      id: 6,
      type: 'Citation',
      title: 'Lumière Intérieure',
      excerpt: '"Chaque mot écrit est une bougie allumée dans l\'obscurité de l\'âme."',
      date: '3 Décembre 2024',
      readingTime: '1 min',
      wordCount: 20
    }
  ];

  constructor() {
    this.filterWritings();
  }

  setFilter(type: string) {
    this.selectedFilter = type;
    this.filterWritings();
  }

  filterWritings() {
    this.filteredWritings = this.allWritings.filter(writing => {
      const matchesType = this.selectedFilter === 'Tous' || writing.type === this.selectedFilter;
      const matchesSearch = !this.searchQuery || 
        writing.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        writing.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return matchesType && matchesSearch;
    });
  }

  getTypeColor(type: string): string {
    const colors = {
      'Poème': '#D4AF37',
      'Slam': '#8B4513',
      'Citation': '#9370DB'
    };
    return colors[type as keyof typeof colors] || '#D4AF37';
  }

  navigateToReading(id: number) {
    // Navigation handled by Angular router
    window.location.href = `/lecture/${id}`;
  }

}
