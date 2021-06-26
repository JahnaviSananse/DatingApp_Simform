import {FontFamilyType, FontStyleType} from './BaseTypes';

export type IsidoraFontWeightType =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export function getIsidoraFontByWeight(
  fontStyle: FontStyleType,
  fontWeight: IsidoraFontWeightType,
) {
  switch (fontWeight) {
    case '100':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Light'
        : 'IsidoraSansAlt-Light';
    case '200':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Light'
        : 'IsidoraSansAlt-Light';
    case '300':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Light'
        : 'IsidoraSansAlt-Light';
    case '400':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Light'
        : 'IsidoraSansAlt-Light';
    case '500':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Light'
        : 'IsidoraSansAlt-Light';
    case '600':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-SemiBold'
        : 'IsidoraSansAlt-SemiBold';
    case '700':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-SemiBold'
        : 'IsidoraSansAlt-SemiBold';
    case '800':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Black'
        : 'IsidoraSansAlt-Black';
    case '900':
      return fontStyle === 'normal'
        ? 'IsidoraSansAlt-Black'
        : 'IsidoraSansAlt-Black';
  }
}

export function getIsidoraFullFontFamily(font: FontFamilyType) {
  switch (font) {
    case 'bold':
      return getIsidoraFontByWeight('normal', '600');
    case 'regular':
      return getIsidoraFontByWeight('normal', '400');
    case 'italic':
      return getIsidoraFontByWeight('italic', '400');
    default:
      return getIsidoraFontByWeight('normal', '400');
  }
}
