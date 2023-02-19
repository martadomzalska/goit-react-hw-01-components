import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

export const FriendList = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <span
            className={clsx(css["status"], {
              [css.online]: friend.isOnline,
              [css.offline]: !friend.isOnline,
            })}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </>
);


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
