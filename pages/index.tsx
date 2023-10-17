import Heading from '../components/Heading';
import Socials from '../components/Socials';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Heading text="NextJS APP" tag={undefined} />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
