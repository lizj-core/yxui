import React,{ FC, useState } from 'react';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import useDebounce from '../../hooks/useDebounce'
import Icon from '../Icon/icon'
import Upload from '../Upload/upload';

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
    }
  }

  const extendControls = [
    {
      key: 'custom-modal',
      type: 'modal',
      title:'word导入',
      text: <Icon icon="address-book" />,
      modal: {
        id: 'my-moda-1',
        title: 'word导入',
        children: (
          <div style={{ width: 400, padding: '0 10px' }}>
            <Upload 
              action="http://192.168.10.89/fs/api/v1.0/uploadFile" 
              name="file"
              multiple
              drag
            >
              <Icon icon="upload" size="5x" theme="secondary" />
              <br />
              <p>Drag file over to upload</p>
            </Upload>
          </div>
        )
      }
    }
  ]

  return (
    <BraftEditor 
      value={editorState}
      onChange={handleEditorChange}
      extendControls={extendControls}
    />
  )
}

export default Editor;



