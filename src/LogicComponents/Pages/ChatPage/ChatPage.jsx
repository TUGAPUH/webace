import React, { useEffect, useRef } from 'react';
import style from './chat.module.scss';
import { db } from '../../../Firebase/firebaseInit';
import { Loader } from '../../../Components/Loader/Loader';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { TextField } from './ChatElements';
import { ChatControls } from './ChatControls/ChatControls';
import { useSelector } from 'react-redux';

const ChatPage = () => {
    const bottomRef = useRef();
    const mainRef = useRef();
    const [messages, loading] = useCollectionData(query(collection(db, 'messages'), orderBy('createdAt')));
    const refEditChat = useRef();
    const edited = useSelector(state => state.mainReducer.edited);

    useEffect(() => {
        if (messages && mainRef.current && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [messages]);

    if (loading) {
        return <Loader />
    }

    const showPopup = () => {
        const styled = refEditChat.current.style;
        if (!edited.edit) {
            styled.borderTopWidth = '1px';
            styled.transform = 'translateY(0)';
        }
    }

    return (
        <div>
            <div className={style.chatPageWrapper}>
                <div className={style.chat}>

                    <div ref={mainRef} className={style.textField}>

                        <TextField showPopup={showPopup} />

                        <div ref={bottomRef} />

                    </div >

                    <section>

                        <ChatControls refEditChat={refEditChat} />

                    </section>
                </div>

            </div>
        </div>
    );
};

export default ChatPage;