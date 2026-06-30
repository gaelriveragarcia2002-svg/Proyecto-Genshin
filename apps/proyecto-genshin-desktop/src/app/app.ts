import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@proyecto-genshin/global-core';
import { Boton } from '@proyecto-genshin/global-shared';
@Component({
  imports: [RouterModule, Boton],
  selector: 'app-root',
  template: `
    <h1 class="text-primary-500 bg-primary-50 dark:text-primary-950">
      Hola Mundo owo
    </h1>
    <lib-boton></lib-boton>
  `,
  styleUrl: './app.css',
})
export class App implements OnInit {
  // * Inyeccion de dependencias.
  private readonly _themes = inject(ThemeService);
  public flag = false;

  // * Metodos de ciclo de vida del componente.
  public ngOnInit(): void {
    setInterval(() => {
      this._themes.setTheme(this.flag ? 'pastel' : 'default');
      this.flag = !this.flag;
    }, 3000);
  }

  protected title = 'proyecto-genshin-desktop';
}
