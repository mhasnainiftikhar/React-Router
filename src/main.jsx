import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route 
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import TermsConditions from './components/Privacy/TermsConditions.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route path="github" element={<Github />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="termsconditions" element={<TermsConditions />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
