import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const CountdownWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper marginTop={2}>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          This is an ad...
        </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography color={main}>companywebsite.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        What type of social media app doesn't have ads!!
      </Typography>
    </WidgetWrapper>
  );
};

export default CountdownWidget;