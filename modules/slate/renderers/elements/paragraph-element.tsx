import { RenderElementProps } from 'slate-react';
import * as React from 'react';

export function ParagraphElement({ attributes, children }: RenderElementProps) {
  return <p {...attributes}>{children}</p>;
}
