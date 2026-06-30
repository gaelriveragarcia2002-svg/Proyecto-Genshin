import { inject, Injectable, signal } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { THEME_REGISTRY, ThemeKey } from './theme.registry';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // * Atributos del servicio.
  private readonly _primeNG = inject(PrimeNG);
  private _theme = signal<ThemeKey>('default');
  private _isDark = signal(false);

  readonly theme = this._theme.asReadonly();
  readonly isDark = this._isDark.asReadonly();

  // * Metodos del servicio.
  public setTheme(key: ThemeKey): void {
    const apply = () => {
      const current = this._primeNG.theme();
      this._primeNG.setThemeConfig({
        theme: { ...current, preset: THEME_REGISTRY[key].preset },
      });
      this._theme.set(key);
    };

    if (!document.startViewTransition) {
      apply();
      return;
    }

    document.startViewTransition(apply);
  }

  public toggleDark(): void {
    const apply = () => {
      const dark = !this._isDark();
      document.documentElement.classList.toggle('dark', dark);
      this._isDark.set(dark);
    };

    if (!document.startViewTransition) {
      apply();
      return;
    }

    document.startViewTransition(apply);
  }
}
