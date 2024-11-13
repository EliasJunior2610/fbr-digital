import "./forget.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import { useEffect } from "react";

const SendCode = styled(Button)({
  backgroundColor: "#F26651",
  borderRadius: "20px",
  padding: "10px 20px",

  "&:hover": {
    backgroundColor: "#c2503f",
  },
});

const CustomRadio = styled(Radio)({
  color: "white",
  "&.Mui-checked": {
    color: "white",
  },
});

const CustomFormControlLabel = styled(FormControlLabel)({
  color: "white",
  "& .MuiFormControlLabel-label": {
    color: "white",
  },
});

export default function Forget() {
  useEffect(() => {
    document.title = "Esqueceu a Senha";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./assets/favicon.ico";
    document.head.appendChild(link);
  }, []);

  return (
    <div id="Forget">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3 style={{ textAlign: "center" }}>
          Para ajudar a proteção da sua conta, a FBR Digital solicita a
          confirmação de dados para redefinição da senha:
        </h3>

        <FormControl sx={{ mb: 2, width: "100%" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ justifyContent: "space-between" }}
          >
            <CustomFormControlLabel
              value="email"
              control={<CustomRadio />}
              label="E-mail"
            />
            <CustomFormControlLabel
              value="telefone"
              control={<CustomRadio />}
              label="Telefone"
            />
          </RadioGroup>
        </FormControl>

        <TextField
          id="filled-basic"
          label="Escreva aqui:"
          color="info"
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "25px",
          }}
        />

        <Stack
          spacing={2}
          direction="row"
          sx={{ mt: 2, justifyContent: "center", width: "100%" }}
        >
          <SendCode
            variant="contained"
            onClick={() => (window.location.href = "/recuperar")}
          >
            Enviar código
          </SendCode>
        </Stack>

        <Link
          href="https://www.fbrdigital.com.br"
          sx={{
            mt: 2,
            color: "#F26651",
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Contatar Suporte
        </Link>
      </Box>
    </div>
  );
}
