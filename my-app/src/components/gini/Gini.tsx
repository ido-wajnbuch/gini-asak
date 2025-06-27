import { TextField } from '@mui/material';
import React, { useState , useRef, useEffect} from 'react';

const Gini : React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [valueSaver, setValueSaver] = useState('');
    const questionNumber = useRef(0);

    useEffect(() => {questionNumber.current++;});

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
                    setValueSaver(inputValue);
                    setInputValue('')
                    alert(`You pressed Enter! Value: ${valueSaver}`);
                }
            }}
            />
        </div>
    );
}

export default Gini;