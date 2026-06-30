import { Preset } from '@primeuix/themes/types';
import { DefaultPreset } from './presets/default.preset';
import { PastelPreset } from './presets/pastel.preset';

export type ThemeKey = 'default' | 'pastel';

export interface ThemeDefinition {
  label: string;
  preset: Preset;
}

export const THEME_REGISTRY: Record<ThemeKey, ThemeDefinition> = {
  default: { label: 'Default', preset: DefaultPreset },
  pastel: { label: 'Pastel', preset: PastelPreset },
};
