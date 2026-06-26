import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact-section.html',
})
export class ContactSectionComponent {
  form = {
    nombre: '',
    telefono: '',
    email: '',
    tipo: 'Nueva Hipoteca',
    mensaje: '',
    privacidad: false,
  };

  onSubmit() {
    if (!this.form.privacidad) return;
    console.log('Formulario enviado', this.form);
  }
}
