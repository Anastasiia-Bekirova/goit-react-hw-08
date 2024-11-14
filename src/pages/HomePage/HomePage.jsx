import DocumentTitle from '../../components/DocumentTitle';
import styles from './HomePage.module.css'


export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={styles.container}>
        <h1 className={styles.title}>
          Contacts manager welcome page{' '}
        </h1>
      </div>
    </>
  );
}
