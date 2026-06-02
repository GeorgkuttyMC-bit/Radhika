/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <ContactFooter />
    </Layout>
  );
}

