/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import { Button, Stack, Typography } from "@mui/material";
import logo from "../../assets/Marca FBR.png";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <Box display="flex" alignItems="center" sx={{flexGrow:1}}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={auth}
                    onChange={handleChange}
                    aria-label="login switch"
                  />
                }
                label={auth ? "Logout" : "Login"}
              />
            </FormGroup>
            <Box
              component="img"
              src={logo}
              alt="Logo da Empresa"
              sx={{ maxHeight: 100 }}
            />
          <Stack direction="row" sx={{mx:"auto"}}>
            <Button color="inherit" sx={{mx:"auto"}} onClick={() => window.location.href = '/minhas-solicitacoes'}>Meus Pedidos</Button>
            <Button color="inherit" sx={{mx:"auto"}} onClick={() => window.location.href = '/minhas-solicitacoes'}>Histórico</Button>
          </Stack>
          </Box>
          <Box>
            {auth ? (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                    <Stack
                    direction="column"
                    alignItems="center"
                    onClick={() => window.location.href = '/login'}
                    sx={{ cursor: 'pointer' }}
                    >
                    <AccountCircle />
                    <Typography>Entre ou Cadastre-se</Typography>
                    </Stack>
                </IconButton>
            ) : (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
