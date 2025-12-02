import { useRouter } from 'next/router';
import styles from '../styles/City.module.css';
import { SmallLogoIcon } from '../public/icon';
import Today from '../components/Today/Today';

export default function City() {
  const router = useRouter();
  const { city } = router.query;

  return (
    <main className={styles.container}>
      <SmallLogoIcon />
      <h1 className="font-city-heading">Weather Information for {city}</h1>
      <Today />
    </main>
  );
}
