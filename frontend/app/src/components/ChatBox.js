import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Emoji from './Emoji';

function ChatBox(props) {
  const [textCheckedShow, setTextCheckedShow] = useState(false)
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://hn.algolia.com/api/v1/search?query=${query}`,
      );

      setData(result.data);
    };

    fetchData();
  }, [query]);

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