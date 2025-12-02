import Link from 'next/link';
import styles from './CityBtn.module.css';

export default function CityBtn({ text }) {
  const href = `/${text}`;

  return (
    <Link href={href} legacyBehavior>
      <a className={styles.btn}>{text}</a>
    </Link>
  );
}
