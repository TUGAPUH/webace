import React from 'react'
import style from '../chat.module.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import emojiData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import paperClip from '../img/paperclip.svg';
import send from '../img/send.svg';
import smile from '../img/smile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../../../Store/MainSlice/MainSlice';

export const ButtonsControls = ({ setSelectedFile, sendData, }) => {
    const value = useSelector(state => state.mainReducer.value);
    const dispatch = useDispatch();
    return (
        <div className={style.btnsBlock}>
            <div className={style.imageUpload}>
                <label htmlFor="file-input">
                    <img src={paperClip} alt="imgAddFile" />
                </label>

                <input
                    id="file-input"
                    type="file"
                    onChange={e => {
                        const file = e.target.files ? e.target.files[0] : undefined;
                        setSelectedFile(file);
                    }}
                />
            </div>

            <OverlayTrigger
                trigger="click"
                rootClose={true}
                placement='top'
                overlay={
                    <Popover id={`popover-positioned-top`}>
                        <Picker theme='light' data={emojiData} onEmojiSelect={e => dispatch(setValue(value + e.native))} />
                    </Popover>
                }
            >
                <button>
                    <img src={smile} alt="imgAddSmile" />
                </button>
            </OverlayTrigger>

            <button onClick={sendData}>
                <img src={send} alt="imgSendData" />
            </button>
        </div>
    )
}
