import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

export function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
          py: 4,
        }}
      >
        <h1>Olá mundo</h1>

        <Button variant="contained" color="success">
          Default
        </Button>

        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subtitle1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <TextField variant="outlined" label="Outlined"></TextField>

        <FingerprintIcon color="success" />
      </Box>
      <Grid2 container sx={{ color: "white" }}>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          sx={{ background: "blue" }}
        >
          Coluna 1
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          sx={{ background: "yellow" }}
        >
          Coluna 1
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          sx={{ background: "black" }}
        >
          Coluna 1
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          sx={{ background: "red" }}
        >
          Coluna 1
        </Grid2>
      </Grid2>
    </>
  );
}
