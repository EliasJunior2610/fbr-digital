import './forget.css'
import Header from "../Header/headerCliente";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const SendCode = styled(Button)({
    backgroundColor: '#F26651',

    '&:hover': {
        backgroundColor: '#c2503f',
    }
})



export default function Forget() {
    return (
        <div id="Forget">
            <Header />
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
            noValidate
            autoComplete="off"
            >
                <h3>Para ajudar a proteção da sua conta, a FBR Digital solicita a confirmação de dados para redefinição da senha:</h3>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="email" control={<Radio />} label="E-mail" />
                        <FormControlLabel value="telefone" control={<Radio />} label="Telefone" />
                    </RadioGroup>
                </FormControl>
                <TextField id="filled-basic" label="Escreva aqui:" color='info' variant="filled" />
            
                <Stack spacing={2} direction="row">             
                    <SendCode variant="contained" onClick={() => alert('Clicado!')}>Enviar código</SendCode>
                </Stack>
            </Box>
        </div>
    )
}