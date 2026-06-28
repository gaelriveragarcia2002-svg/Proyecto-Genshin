import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Boton } from '@proyecto-genshin/global-shared';
@Component({
  imports: [RouterModule, Boton],
  selector: 'app-root',
  template: ` <lib-boton></lib-boton> `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'proyecto-genshin-desktop';
}
