import styles from './Option.module.scss';

export const Option = ({ children, active, onClick }) => {
  return (
    <div className={`${styles.button} ${active ? styles.active : ''}`} onClick={onClick}>
      {children}
    </div>
  );
};
