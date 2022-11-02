import React, { useEffect, useState } from 'react';
import axiosConfig from '../rAPI/axios';
import Button from '@mui/material/Button';
import Emoji from './Emoji';

function ChatBox(props) {
  const [textCheckedShow, setTextCheckedShow] = useState(false)

  const bodyParameters = {
     "queryInput": {
        "text": {
           "text": "hello",
           "languageCode": "en"
        }
     },
     "queryParams": {
     }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await
        axiosConfig.post(
          bodyParameters
        );
      console.log(result)
      //setData(result.data);
    };

    fetchData();
  }, []);
  // [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <Button 
              style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} 
              variant="outlined"
              onClick={() => {
                        setTextCheckedShow(true); 
                        setSearch(query)}
                      }>
              <Emoji symbol="🐑" label="sheep"/>
      </Button>
      {textCheckedShow && (<h2> Send</h2>) }
    </div>

    );
}

export default ChatBox;