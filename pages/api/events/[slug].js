const { events } = require('./data.json');

export default (req, res) => {
  const evt = events.filter((ev) => ev.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `METHOD ${req.method} is not allowed` });
  }
};

// to get a particular event
// cannot be used for static webpages
