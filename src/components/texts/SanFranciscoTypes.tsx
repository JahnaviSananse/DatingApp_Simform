import {FontFamilyType, FontStyleType} from './BaseTypes';

export type SanFranciscoFontWeightType =
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800';

export function getSanFranciscoFontByWeight(
  fontStyle: FontStyleType,
  fontWeight: SanFranciscoFontWeightType,
) {
  switch (fontWeight) {
    case '300':
      return fontStyle === 'normal' ? 'SFUIText-Light' : 'SFUIText-LightItalic';
    case '400':
      return fontStyle === 'normal'
        ? 'SFUIText-Regular'
        : 'SFUIText-RegularItalic';
    case '500':
      return fontStyle === 'normal'
        ? 'SFUIText-Medium'
        : 'SFUIText-MediumItalic';
    case '600':
      return fontStyle === 'normal'
        ? 'SFUIText-Semibold'
        : 'SFUIText-SemiboldItalic';
    case '700':
      return fontStyle === 'normal' ? 'SFUIText-Bold' : 'SFUIText-BoldItalic';
    case '800':
      return fontStyle === 'normal' ? 'SFUIText-Heavy' : 'SFUIText-HeavyItalic';
  }
}

export function getSanFranciscoFullFontFamily(font: FontFamilyType) {
  switch (font) {
    case 'bold':
      return getSanFranciscoFontByWeight('normal', '600');
    case 'regular':
      return getSanFranciscoFontByWeight('normal', '400');
    case 'italic':
      return getSanFranciscoFontByWeight('italic', '400');
    default:
      return getSanFranciscoFontByWeight('normal', '400');
  }
}
