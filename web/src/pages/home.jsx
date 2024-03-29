import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "pages/navbar";
import UserWidget from "components/widgets/UserWidget";
import MyPostWidget from "components/widgets/MyPostWidget";
import PostsWidget from "components/widgets/PostsWiget";
import FriendListWidget from "components/widgets/FriendsListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "25%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <FriendListWidget userId={_id} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "72%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
