import styles from './UserMenu.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>{name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
