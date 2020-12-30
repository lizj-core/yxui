import React,{ FC, useState } from 'react';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
// import { ContentUtils } from 'braft-utils';
// import useDebounce from '../../hooks/useDebounce'
import Icon from '../Icon/icon'
import Upload from '../Upload/upload';
// import { array } from '@storybook/addon-knobs';

interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
   /** 文本提示文案 */
  placeholder?: string;
  /** 是否不显示富文本框头部格式 */
  isNotControls?: boolean;
  style?: React.CSSProperties;
}

const extendControls = [
  {
    key: 'modal-1',
    type: 'modal',
    title:'word导入',
    text: <Icon icon="address-book" />,
    modal: {
      id: 'moda-1',
      title: 'word导入',
      children: (
        <div style={{ width: 400, padding: '0 10px' }}>
          <Upload 
            action="/fs/api/v1.0/uploadFile.json" 
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

export const Editor: FC<EditorProps> = (props) => {
  const {
    value,
    onChange,
    placeholder,
    isNotControls,
    style,
  } = props;
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value || null))
  
  const handleEditorChange = (editorState: any) => {
    setEditorState(editorState);
    if(onChange) {
      onChange(editorState.toHTML())
    }
  }
  
  return (
    <BraftEditor 
      value={editorState}
      onChange={handleEditorChange}
      className="yxui-editor"
      placeholder={placeholder}
      controls= {
        isNotControls ? [] : 
        [
          'undo', 'redo', 'separator',
          'font-size', 'line-height', 'letter-spacing', 'separator',
          'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
          'superscript', 'subscript', 'remove-styles', 'emoji',  'separator', 'text-indent', 'text-align', 'separator',
          'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
          'link', 'separator', 'hr', 'separator',
          'media', 'separator',
          'clear'
        ]
      }
      contentStyle={{height:"100px"}}
      style={{...style}}
      // extendControls={extendControls}
    />
  )
}

export default Editor;



