import { TextField } from '@mui/material';
import React, { useState , useRef, useEffect} from 'react';
import Modal from 'react-modal';

function PopupWishContent({ numberOfWish }: { numberOfWish: number }) 
{
    switch (numberOfWish) {
        case 1:
            return <div>Wish 1: Your first wish!</div>;
        case 2:
            return <div>Wish 2: Your second wish!</div>;
        case 3:
            return <div>Wish 3: Your third wish!</div>;
        default:
            return <div>No wish selected.</div>;
    }
}

const Gini: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [popup, setPopup] = useState(false);
    const [wishNumber, setWishNumber] = useState(0);

    const cleanInput = () => { setInputValue(''); };
    const clickOpenPopup = () => { setPopup(true); };
    const clickClosePopup = () => { setPopup(false); };

    return (
        <div className='gini'>
            <img className='gini-img'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QYRUuGRV7EiDo5gj8Q--4bg3XFqv4TZ6gA&s'>
            </img>
            <TextField
                id="outlined-basic"
                label="Enter Your Wish"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setWishNumber(prev => prev + 1);
                        cleanInput();
                        setPopup(true);
                    }
                }}
            />
            <Modal className='comments-window' isOpen={popup} onRequestClose={clickClosePopup}>
                <button className='close-comments' onClick={clickClosePopup}>X</button>
                <PopupWishContent numberOfWish={wishNumber} />
            </Modal>
        </div>
    );
}

export default Gini;