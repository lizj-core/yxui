
import React, { FC, Fragment, ReactNode } from 'react';
import Dialog from 'rc-dialog';
import Upload from 'rc-upload';

interface DialogProps {
    /**是否显示导入弹窗 */
    visible: Boolean;
    /**模板url */
    templateUrl?: String;
    /**模板下载文案，存在templateUrl时templateDom无效 */
    templateDom?: ReactNode;
    onClose: () => void;
}

export const DialogFileImport: FC<DialogProps> = (props) => {
    const {
        onClose,
        visible,
    } = props;
    console.log(visible);
    return (
        <Fragment>
            {visible && (
                <Dialog
                    visible
                    title="图片预览"
                    onClose={() => onClose()}
                >
                    <Upload action="http://192.168.10.89/fs/api/v1.0/uploadFile.json">下载</Upload>
                </Dialog>
            )}
        </Fragment>

    )
}

DialogFileImport.defaultProps = {
    visible: false,

}

export default DialogFileImport;

