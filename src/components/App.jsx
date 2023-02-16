import user from "./Profile/user.json";
import { Profile } from "./Profile/Profile";

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </>
  );
};
