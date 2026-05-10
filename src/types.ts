export const COLOR_OPTIONS = ['Rouge', 'Bleu', 'Vert', 'Blanc', 'Violet', 'Noir'] as const;
export type Color = typeof COLOR_OPTIONS[number];

export const VALUE_OPTIONS = [-30, -20, -10, 10, 20, 30] as const;
export type ColorValue = typeof VALUE_OPTIONS[number];

export interface PlayerConfig {
  name: string;
  color: Color;
  value: ColorValue;
}

export interface Holdings {
  gems: number[];
  gold: number;
}
