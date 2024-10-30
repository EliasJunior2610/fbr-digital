import "./forget.css";
import Header from "../Header/headerCliente";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

const SendCode = styled(Button)({
  backgroundColor: "#F26651",

  "&:hover": {
    backgroundColor: "#c2503f",
  },
});

export default function Forget() {
  return (
    <>
      <Header />
      <Box
        component="form"
        sx={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          "& > :not(style)": { m: 1, width: "50ch" },
          borderRadius: 0,
          display: "flex",

        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6" textAlign="center" sx={{ color: "white" }}>
          Para ajudar a proteção da sua conta, a FBR Digital solicita a
          confirmação de dados para redefinição da senha:
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FormControlLabel
              value="email"
              control={
                <Radio
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "#c2503f",
                    },
                  }}
                />
              }
              label="E-mail"
            />
            <FormControlLabel
              value="telefone"
              control={
                <Radio
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "#c2503f",
                    },
                  }}
                />
              }
              label="Telefone"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Escreva aqui:"
          color="info"
          variant="filled"
          sx={{ backgroundColor: "white"}}
        />

        <Stack
          spacing={2}
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="contained" color="primary">
            Cancelar
          </Button>
          <SendCode variant="contained" onClick={() => alert("Clicado!")}>
            Enviar código
          </SendCode>
        </Stack>
      </Box>
    </>
  );
}
