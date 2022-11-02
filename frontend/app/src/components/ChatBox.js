import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Emoji from './Emoji';

function ChatBox(props) {
  const [textCheckedShow, setTextCheckedShow] = useState(false)
  
  return (
    <div>
      <Button 
              style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} 
              variant="outlined"
              onClick={() => setTextCheckedShow(true)}>
              <Emoji symbol="🐑" label="sheep"/>
      </Button>
      {textCheckedShow && (<h2> Send</h2>) }
    </div>

    );
}

export default ChatBox;