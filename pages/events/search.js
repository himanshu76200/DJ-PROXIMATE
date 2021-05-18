import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaBackward } from 'react-icons/fa';

export default function SearchPage({ events }) {
  const router = useRouter();
  console.log(events);
  return (
    <Layout title='Search Results'>
      <Link href='/events'>
        <a>
          <FaBackward /> Go Back
        </a>
      </Link>
      <h1>Search Results for {router.query.term}</h1>
      {events.length === 0 && <h1>No Events</h1>}
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </Layout>
  );
}

// runs at build time
// revalidate events every 1 second
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  return {
    props: { events },
  };
}
