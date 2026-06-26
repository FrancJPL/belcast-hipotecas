import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  locations = [
    'El Prat de Llobregat', 'Hospitalet de Llobregat', 'Gavà', 'Viladecans',
    'Cornellà', 'Castelldefels', 'Molins de Rei', 'Sant Just Desvern',
    'Sant Cugat del Vallès', 'Sant Adrià de Besòs',
  ];
}
