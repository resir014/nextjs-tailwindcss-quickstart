import * as React from 'react';
import { createEditor } from 'slate';
import type { Descendant } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Edit and write your word salad here...' }],
  },
];

export function RichTextEditor() {
  const [inputValue, setInputValue] = React.useState<Descendant[]>(initialValue);
  const [editor] = React.useState(() => withReact(createEditor()));

  console.log(inputValue);

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
          <Editable />
        </Slate>
      </div>
      <div className="mt-4 p-4 rounded-lg border-4 border-dashed bg-gray-200 font-mono">h</div>
    </div>
  );
}
