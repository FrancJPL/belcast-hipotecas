import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services-grid.html',
})
export class ServicesGridComponent {
  services = [
    {
      icon: 'home_work',
      title: 'Nueva Hipoteca',
      description: 'Condiciones exclusivas para la compra de tu primera o segunda vivienda en El Prat y cercanías.',
      delay: '0ms',
    },
    {
      icon: 'currency_exchange',
      title: 'Mejorar Hipoteca',
      description: 'Subrogación o novación para bajar el interés que pagas actualmente. Empieza a ahorrar cada mes.',
      delay: '100ms',
    },
    {
      icon: 'full_stacked_bar_chart',
      title: 'Hipoteca 100%',
      description: 'Buscamos el máximo de financiación posible si no tienes ahorros suficientes para la entrada.',
      delay: '200ms',
    },
  ];
}
