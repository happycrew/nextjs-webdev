import Link from 'next/link';
import Heading from '../../components/Heading';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { contactType } from '../../types';

type contactsProps = {
  contacts: contactType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactsProps> = ({ contacts }) => {
  return (
    <>
      <Heading text="Contacts list:" tag={undefined} />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id} style={{ listStyle: 'none', marginTop: '5px' }}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
                href={`/contacts/${id}`}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
