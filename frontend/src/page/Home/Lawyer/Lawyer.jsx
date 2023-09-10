import styles from './Lawyer.module.css';
import {lawyers} from '../../../utils/Lawyers';

export const Lawyer = ({index}) => {

  const lawyerData = lawyers[index];
  
  return (
    <div className={styles.container}>
      <img src={lawyerData.profile} className={styles.image} />
      <p className={styles.name}>
        {lawyerData.name}
        <span className={styles.text}>변호사</span>
      </p>
      <p className={styles.info}>
        {lawyerData.company}
        <br />
        {lawyerData.area} ·{lawyerData.field}
      </p>
    </div>
  );
};
