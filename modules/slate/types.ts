import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomEditor = BaseEditor & ReactEditor;

export type ParagraphElement = {
  type: 'paragraph';
  children: CustomText[];
};

export type HeadingElement = {
  type: 'heading';
  level: number;
  children: CustomText[];
};

export type CustomElement = ParagraphElement | HeadingElement;

export type CustomTypes = CustomElement['type'];

export type FormattedText = { text: string; bold?: true | null };

export type CustomText = FormattedText;
