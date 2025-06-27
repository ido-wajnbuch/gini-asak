import { TextField } from '@mui/material';
import React, { useState , useRef, useEffect} from 'react';

function PopupWish(numberOfWish:number)
{
    //add modal that shoes picture and text for each one of them
    switch(numberOfWish)
    {
        case 1:

        case 2:

        case 3:

        default:

    }
}
const Gini : React.FC = () => {
    const wishNumber = useRef(0);

    const increaseWishNUmber = () => {wishNumber.current++;};
        const [inputValue, setInputValue] = useState('');
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
                if (e.key === 'Enter')
                {
                    increaseWishNUmber();
                    setInputValue('')
                    console.log(wishNumber.current);
                    PopupWish(wishNumber.current);
                }
            }}
            />
        </div>
    );
}

export default Gini;