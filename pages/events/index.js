import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function EventsPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h1>No Events</h1>}
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </Layout>
  );
}

// runs at build time
// revalidate events every 1 second
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
