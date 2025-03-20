import React from 'react';
import { redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from "../components/EventItem";

const EventsDetail = () => {
  const data = useRouteLoaderData('event-detail');
  return (
    <EventItem event={data.event} />
  );
}

export default EventsDetail;

export async function loader({ request, params }) {
  const id = params.eventId

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({
      message: 'Could not fetch details for selected event.'
    }),
      { status: 500 });
  }
  else {
    return response;
  }
}

export async function action({params, request}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({
      message: 'Could not delete event.'
    }),
      { status: 500 });
  }
  return redirect('/events');
}