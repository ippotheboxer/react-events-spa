import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events, { eventLoader } from "./pages/Events";
import EventsDetail, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventsDetail";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventRoot from "./pages/EventRoot";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      <Route path="events" element={<EventRoot />}>
        <Route index element={<Events />} loader={eventLoader} />

        <Route path="new" element={<NewEvent />} action={newEventAction} />

        <Route path=":eventId" loader={eventDetailLoader} id="event-detail">
          <Route index element={<EventsDetail />} action={deleteEventAction} />
          <Route path="edit" element={<EditEvent />} />
        </Route>

      </Route>

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />);
}

export default App;
