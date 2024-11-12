import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "../HeaderCliente/headerCliente";

export default function Recovery() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="column" alignItems="center" mt={7}>
        <Typography variant="h5" color="white" gutterBottom>
          RECUPERE SUA CONTA
        </Typography>
        <Typography variant="subtitle1" color="white" gutterBottom>
          Para ajudar a proteger a sua conta, gostariamos de confirmar se e
          você mesmo que está fazendo login.
        </Typography>
        <Typography variant="subtitle1" color="white" gutterBottom mt={7}>
          Insira o código de recuperação enviado para o seu e-mail.
        </Typography>
        <form>
          <Box display="flex" justifyContent="center" mt={2}>
            {[...Array(6)].map((_, index) => (
              <TextField
                key={index}
                type="text"
                id={`recoveryCode${index}`}
                name={`recoveryCode${index}`}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", color: "white" },
                }}
                required
                style={{ width: "40px", marginRight: "5px" }}
                variant="standard"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  disableUnderline: false,
                  classes: {
                    underline: "MuiInput-underline:before",
                  },
                  style: { color: "white" },
                }}
              />
            ))}
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="error" type="submit">
              Avançar
            </Button>
          </Box>
        </form>
        <Box mt={10} display="flex" justifyContent="center">
          <Typography variant="body2" color="white">
            Precisa de ajuda?{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1976d2" }}
            >
              Contate o suporte
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
