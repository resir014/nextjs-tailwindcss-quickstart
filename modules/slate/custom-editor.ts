/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transforms, Editor, Text } from 'slate';
import { CustomEditor } from './types';

export function isBoldMarkActive(editor: CustomEditor) {
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.bold === true,
    universal: true,
  });

  return !!match;
}

export function isHeadingMarkActive(editor: CustomEditor) {
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.type === 'heading',
  });

  return !!match;
}

export function toggleBoldMark(editor: CustomEditor) {
  const isActive = isBoldMarkActive(editor);

  Transforms.setNodes(
    editor,
    { bold: isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  );
}

export function toggleHeadingMark(editor: CustomEditor) {
  const isActive = isHeadingMarkActive(editor);

  Transforms.setNodes(
    editor,
    { type: isActive ? 'paragraph' : 'heading' },
    { match: n => Editor.isBlock(editor, n) }
  );
}
