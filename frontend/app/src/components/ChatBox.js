import React, { useEffect, useRef ,useState } from 'react';
import axiosConfig from '../rAPI/axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Emoji from './Emoji';

const session = "https://dialogflow.googleapis.com/v2/projects/v-bot-9ktl/agent/sessions/2ecdf11f-2260-a02c-1b85-990164021ba2:detectIntent"

function ChatBox(props) {
  const [textCheckedShow, setTextCheckedShow] = useState(false);
  const [tipy, setTipy] = useState("");
  const [searchQuery, setSearchQuery] = useState(null)
  const [firstRender, setFirstRender] = useState(true)

  const bodyParameters = {
     "queryInput": {
        "text": {
           "text": `${searchQuery}`,
           "languageCode": "en"
        }
     },
     "queryParams": {
     }
  };
  
  useEffect(() => {
    if(firstRender === false){
      const fetchData = async () => {
        const result = await
          axiosConfig.post(
            session,
            bodyParameters
          );
        console.log(result)
        //setData(result.data);
      };


    fetchData();
    }
    setFirstRender(false)
  }, [searchQuery]);

  const sendHandler  = e => {
    const timer = setTimeout(() => 3000);
    return true
  }

  return (
    <div>
      <TextField 
        id="standard-basic" 
        label="Standard" 
        variant="filled"
        value={tipy}
        onChange={event => setTipy(event.target.value)}
      />
      <Button 
              onClick={() => {
                        setTextCheckedShow(true); 
                        setSearchQuery(tipy)
                        setTipy("")
                        }
                      }>
              <Emoji symbol="🐑" label="sheep"/>
      </Button>
      {textCheckedShow && sendHandler() && (<h2> Send</h2>) }
    </div>

    );
}

export default ChatBox;