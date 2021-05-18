import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
import Link from 'next/link';

export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcomming Events</h1>
      {events.length === 0 && <h1>No Events</h1>}
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

// runs at build time
// revalidate events every 1 second
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}

// runs every time we make a request
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();
//   return {
//     props: { events },
//   };
// }
