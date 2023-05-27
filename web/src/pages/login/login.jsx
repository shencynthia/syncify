import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="0.5rem 3%"
        textAlign="left"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          syncify
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="6px"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h4"
          sx={{ mb: "1.5rem", textAlign: "center" }}
        >
          welcome to syncify
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
