import { RenderLeafProps } from 'slate-react';
import * as React from 'react';

export function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  if (leaf.bold) {
    return (
      <strong className="font-bold" {...attributes}>
        {children}
      </strong>
    );
  }
  return <span {...attributes}>{children}</span>;
}
