import {FontFamilyType, FontStyleType} from './BaseTypes';

export type PoppinsFontWeightType =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export function getPoppinsFontByWeight(
  fontStyle: FontStyleType,
  fontWeight: PoppinsFontWeightType,
) {
  switch (fontWeight) {
    case '100':
      return fontStyle === 'normal' ? 'Poppins-Thin' : 'Poppins-ThinItalic';
    case '200':
      return fontStyle === 'normal'
        ? 'Poppins-ExtraLight'
        : 'Poppins-ExtraLightItalic';
    case '300':
      return fontStyle === 'normal' ? 'Poppins-Light' : 'Poppins-LightItalic';
    case '400':
      return fontStyle === 'normal' ? 'Poppins-Regular' : 'Poppins-Italic';
    case '500':
      return fontStyle === 'normal' ? 'Poppins-Medium' : 'Poppins-MediumItalic';
    case '600':
      return fontStyle === 'normal'
        ? 'Poppins-SemiBold'
        : 'Poppins-SemiBoldItalic';
    case '700':
      return fontStyle === 'normal' ? 'Poppins-Bold' : 'Poppins-BoldItalic';
    case '800':
      return fontStyle === 'normal'
        ? 'Poppins-ExtraBold'
        : 'Poppins-ExtraBoldItalic';
    case '900':
      return fontStyle === 'normal' ? 'Poppins-Black' : 'Poppins-BlackItalic';
  }
}

export function getPoppinsFullFontFamily(font: FontFamilyType) {
  switch (font) {
    case 'bold':
      return getPoppinsFontByWeight('normal', '600');
    case 'regular':
      return getPoppinsFontByWeight('normal', '400');
    case 'italic':
      return getPoppinsFontByWeight('italic', '400');
    default:
      return getPoppinsFontByWeight('normal', '400');
  }
}
