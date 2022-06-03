import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Panaltopic(){
    const [data, setData] = useState("");
    const [gdata, setGdata] = useState("");
    const [topic, setTopic] =useState("");
    const [topicfiles, setTopicfile] = ([]);
    const email = localStorage.getItem('user');
     
    

    const theme = createTheme();

    const onChangeFile = (e) => {
        setTopicfile(e.target.topicfiles[0]);
    }

    const Changeonclick = (e) => {
        e.preventDefault();

        const formData= new FormData();

        formData.append("topic", topic);
        formData.append("topicfiles",topicfiles);

        setTopic("");

            axios.post("topicfiles/add", formData)
                .then((res) => {
                    setMessaage(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });

    }

    const check  = () => {
        axios
        .post('http://localhost:5000/group/check', {
          email : email,
        })
        .then((res) => {
          setGdata(res.data)
          console.log(res.data[0].gid)

          const gid = res.data[0].gid;

          axios.get(`http://localhost:5000/topic/searchBygid/${gid}`)
                .then((res) => {
                    setData(res.data)
                    console.log(res.data[0])
                })
        })
        
    };

    useEffect(() => {
        check();
    },[]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Send Document to Panel Member
          </Typography>
          <Box component="form" noValidate onSubmit={Changeonclick} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            {data.map((topic) =>{
                return(
                   <> 
            <Grid item xs={12} >
             
                <TextField
                  autoComplete="given-name"
                  name="topic"
                  required
                  fullWidth
                  disabled
                  autoFocus
                  placeholder={topic.gid}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="topic"
                  required
                  fullWidth
                  disabled
                  autoFocus
                  placeholder={topic.topic}
                />
              </Grid>
              </>)})}
              <Grid item xs={12} >
                <TextField
                  type = "file"
                  required
                  fullWidth
                  name="file"
                  autoComplete="family-name"
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}