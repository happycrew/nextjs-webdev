import Heading from '@/components/Heading';
import ContactInfo from '@/components/ContactInfo';
import Head from 'next/head';

const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;
