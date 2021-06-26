import React from 'react';
// Font names
import {TextProps} from 'react-native';

// Font type and style
export type FontFamilyType = 'bold' | 'regular' | 'italic';

export type FontStyleType = 'normal' | 'italic';

// Text align
export type TextAlight = 'center' | 'left' | 'right' | 'justify';

// Base Props
export interface BaseFontProps<T> extends TextProps {
  font?: FontFamilyType;
  fontStyle?: FontStyleType;
  fontWeight?: T;
  color?: string;
  textAlign?: TextAlight;
  lineHeight?: number;
  fontSize?: number;
  children?: React.ReactNode;
  message?: boolean;
}
