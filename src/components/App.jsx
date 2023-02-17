import user from "./Profile/user.json";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import { TransactionHistory } from "./TransactionHistory/TranactionHistory";
import transaction from "./TransactionHistory/transaction.json"

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transaction} />;
    </>
  );
};
