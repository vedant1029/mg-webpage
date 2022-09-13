import styles from "./index.module.css";

interface InProps {
  // userInfoCategory: string;
  name: string;
  email: string;
  contact: string;
}

const UserDetails = (props: InProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfoCategory}>
        <span>NAME</span>
        <span>EMAIL</span>
        <span>CONTACT</span>
      </div>
      <div className={styles.userDetails}>
        <span >{props.name}</span>
        <span >{props.email}</span>
        <span >{props.contact}</span>
      </div>
    </div>
  );
};

export default UserDetails;
