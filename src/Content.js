import React from 'react';
import { useParams } from 'react-router';
import classes from './Content.module.css';

export default function Content() {
  let { name } = useParams();
  return (
    <div className={classes.contentContainer}>
      <h5 style={{ textAlign: 'left', paddingLeft: '20px' }}>
        {name == 'reactjs' ? 'React JS' : 'Node JS'}
      </h5>
      {name == 'reactjs' ? (
        <p style={{ color: 'black', textAlign: 'left', paddingLeft: '30px' }}>
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on UI
          components. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies. React can be used as
          a base in the development of single-page, mobile, or server-rendered
          applications with frameworks like Next.js. However, React is only
          concerned with state management and rendering that state to the DOM,
          so creating React applications usually requires the use of additional
          libraries for routing, as well as certain client-side functionality.
        </p>
      ) : (
        <p style={{ color: 'black', textAlign: 'left', paddingLeft: '30px' }}>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser, which was designed to build scalable network
          applications. Node.js lets developers use JavaScript to write command
          line tools and for server-side scripting—running scripts server-side
          to produce dynamic web page content before the page is sent to the
          user's web browser. Consequently, Node.js represents a "JavaScript
          everywhere" paradigm, unifying web-application development around a
          single programming language, rather than different languages for
          server-side and client-side scripts. Node.js has an event-driven
          architecture capable of asynchronous I/O. These design choices aim to
          optimize throughput and scalability in web applications with many
          input/output operations, as well as for real-time Web applications
          (e.g., real-time communication programs and browser games).The Node.js
          distributed development project was previously governed by the Node.js
          Foundation, and has now merged with the JS Foundation to form the
          OpenJS Foundation, which is facilitated by the Linux Foundation's
          Collaborative Projects program.
        </p>
      )}
    </div>
  );
}
