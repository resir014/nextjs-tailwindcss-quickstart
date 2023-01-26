import { RenderElementProps } from 'slate-react';
import * as React from 'react';

export function HeadingElement({ attributes, children }: RenderElementProps) {
  return (
    <h2 className="text-2xl font-semibold" {...attributes}>
      {children}
    </h2>
  );
}
