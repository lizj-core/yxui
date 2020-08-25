import React,{ FC, useState, useEffect } from 'react';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import useDebounce from '../../hooks/useDebounce'


interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const Editor: FC<EditorProps> = (props) => {
  const {
    value,
    onChange,
  } = props;
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value || null))

  const handleEditorChange = (editorState: any) => {
    setEditorState(editorState);
    if(onChange) {
      onChange(editorState.toHTML())
      console.log(editorState.toHTML());
      
    }
  }

  return (
    <BraftEditor 
      value={editorState}
      onChange={handleEditorChange}
    />
  )
}

export default Editor;



