/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import * as React from 'react';
import { createEditor } from 'slate';
import type { Descendant } from 'slate';
import { Slate, Editable, RenderElementProps, RenderLeafProps, withReact } from 'slate-react';
import isHotkey from 'is-hotkey';
import { CustomEditor, CustomElement, CustomText } from '../slate/types';
import { Leaf } from '../slate/renderers/leaf';
import { ParagraphElement } from '../slate/renderers/elements/paragraph-element';
import { textEditorHotkeys } from '../slate/hotkeys';
import { HeadingElement } from '../slate/renderers/elements/heading-element';
import { toggleBoldMark, toggleHeadingMark } from '../slate/custom-editor';

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Write down your hot takes here...' }],
  },
];

export function RichTextEditor() {
  const [inputValue, setInputValue] = React.useState<Descendant[]>(initialValue);
  const [editor] = React.useState(() => withReact(createEditor()));

  const renderElement = React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading': {
        return <HeadingElement {...props} />;
      }
      case 'paragraph': {
        return <ParagraphElement {...props} />;
      }
      default: {
        return <ParagraphElement {...props} />;
      }
    }
  }, []);

  const renderLeaf = React.useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className="px-4 py-8 sm:px-0">
      <div className="p-4 rounded-lg border-4 border-dashed border-gray-200">
        <Slate
          editor={editor}
          value={inputValue}
          onChange={value => {
            setInputValue(value);
          }}
        >
          <Editable
            className="space-y-4"
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Write down your hot takes here..."
            onKeyDown={event => {
              for (const hotkey in textEditorHotkeys) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault();
                  const transformer = textEditorHotkeys[hotkey];

                  switch (transformer) {
                    case 'bold': {
                      toggleBoldMark(editor);
                      break;
                    }
                    case 'heading': {
                      toggleHeadingMark(editor);
                      break;
                    }
                    default: {
                      break;
                    }
                  }
                }
              }
            }}
          />
        </Slate>
      </div>
      <pre className="mt-4 p-4 rounded-lg border-4 border-dashed bg-gray-200 font-mono overflow-x-auto">
        {JSON.stringify(inputValue, null, 2)}
      </pre>
    </div>
  );
}
