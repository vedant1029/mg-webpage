import styles from "./index.module.css";
import {UserDataType} from '../../constants/UserDataType'

interface InProps {
  userData?:UserDataType
}

const UserDetails = (props:InProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfoCategory}>
        <span>NAME</span>
        <span>EMAIL</span>
        <span>CONTACT</span>
      </div>
      <div className={styles.userDetails}>
        <span >{props.userData?.name}</span>
        <span >{props.userData?.email}</span>
        <span >{props.userData?.contact}</span>
      </div>
    </div>
  );
};

export default UserDetails;
