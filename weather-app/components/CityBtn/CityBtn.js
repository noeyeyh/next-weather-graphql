import styles from './CityBtn.module.css';

export default function CityBtn({ text, onClick }) {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
