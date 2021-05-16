import styles from '../styles/404.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Page Not Found</h4>
        <Link href='/'>Go back to homepage</Link>
      </div>
    </Layout>
  );
}
