
import * as React from 'react';
import { useState } from 'react';
import styles from './ChatGptWebPart.module.scss';
import { IChatGptWebPartProps } from './IChatGptWebPartProps';
import axios from 'axios';

import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';
import LinearProgress from '@mui/material/LinearProgress';

import Button from '@mui/material/Button';



const ChatGptWebPart: React.FC<IChatGptWebPartProps> = ({
  hasTeamsContext,
}: {
  hasTeamsContext: boolean;
}) => {
  const [token, setToken] = useState<string>('');
  
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [checkConf, setConf] = useState<boolean>(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
var topping="50%"

  if(response.length>=1259){
    topping="100%"
  } else{
    topping="50%"
  }
  

  const style = {
    position: 'absolute' as 'absolute',
    top:topping,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(67, 66, 79, 0.8)',
    border: '1px solid #3b393b',
    boxShadow: 24,
    p: 4,
    borderRadius: 10,
  };


  function makeARequest(token: string, prompt: string) {
    setLoader(true);
    console.log('pass');
    const openAIApiUrl = 'https://api.openai.com/v1/chat/completions';
    const model = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(openAIApiUrl, model, { headers })
      .then((res) => {
        setResponse(res.data.choices[0].message.content);
        console.log(res.data.choices[0].message.content);
        setLoader(false);
        handleOpen();
      })
      .catch((err) => {
        setResponse(err.message)
        setLoader(false);
        handleOpen();
        console.error(err);
      });
  }

  const handleTokenInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const handlePromptInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleButtonClick = () => {
    makeARequest(token, prompt);
  };

  const textFieldStyle = {
    width: '400px', // Adjust the width as needed
  };

  const buttonStyle = {
    width: '200px', // Adjust the width to make it larger
    height: '55px', // Adjust the height to make it taller
    backgroundColor: 'green', // Change the background color
    color: 'white', // Change the text color
  };

  const buttonStyleTwo = {
    width: '200px', // Adjust the width to make it larger
    height: '55px', // Adjust the height to make it taller
    backgroundColor: 'green', // Change the background color
    color: 'white', // Change the text color
    
  };

  return (
    <section style={{ backgroundImage: "url('https://png.pngtree.com/background/20210712/original/pngtree-white-blur-background-picture-image_1178038.jpg')" }} className={`${styles.chatGptWebPart} ${hasTeamsContext ? styles.teams : ''}`}>

      <img style={{ width: '200px' }} src={require('../assets/TenStepLogo.png')} />

      {checkConf ? (
        <div>
          <h1>Please enter your openAI secret key</h1>
          <p>You can find your API secret <a href='https://platform.openai.com/account/api-keys' target='_blank'>here</a>.</p>
          <TextField
              onChange={handleTokenInput}
              style={textFieldStyle}
              id="outlined-basic"
              label="API Secret"
              variant="outlined"
            
            />
        
          <Button style={buttonStyle} size="large" onClick={() => {
            console.log("ttttt")
            if(token.length===51){
              setConf(false)
            }else{
              window.alert("Please enter a valid secret key");
            }
            }} variant="contained" color="success">
       Confirm
      </Button>
        </div>
      ) : (
        <div>
        
          <div className={styles.welcome}>
            <p>Please note that it may take up to 20 seconds to respond*</p>
            <TextField
              onChange={handlePromptInput}
              style={textFieldStyle}
              id="outlined-basic"
              label="Prompt"
              variant="outlined"
              multiline
            />
          </div>
<div style={{ textAlign: 'center' }}>
<Button style={buttonStyleTwo} size="large" onClick={handleButtonClick} variant="contained" color="success">
      Ask PrompedAI
      </Button>

</div>
          
          {loader ? <div><h2>Thinking...</h2> <LinearProgress color="success" /></div> : null}
          <Modal
          style={{overflow : "auto"}}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography color={"#0ccc76"} id="modal-modal-title" variant="h6" component="h2">
              PrompedAI:
              </Typography>
              <Typography style={{position:"relative",top:"20%",color:"white"}} id="modal-modal-description" sx={{ mt: 2 }}>
  {response === "Request failed with status code 429" ? (
    
    "You may need a paid subscription to OpenAI ChatGPT because you exceeded the free quota."
  ) : (
    response
  )}
</Typography>
            </Box>
          </Modal>
        </div>
      )}
    </section>
  );
};

export default ChatGptWebPart;
