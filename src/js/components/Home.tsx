import * as React from 'react';

const Home = () => {
  return (
    <div>
      <div className="main-header">
        <div className="feature feature-main">
          <h1>Head To Head</h1>
          <p>
            Keep track of all the <em>important battles</em> in your
            life. eg. <strong>FIFA games on Playstation</strong> or
            the casual <strong>table tennis games</strong> during your
            lunch break.
          </p>
        </div>
        <div className="feature feature-quote">
          <p>
            <em>
              "You against me in Fifa! Who is the current champion?"
            </em>
          </p>
        </div>
        <div className="feature feature-firebase">
          <h2>React + Firebase</h2>
          <p>
            In this advanced React tutorial you will learn how to{' '}
            <strong>sync more complex state</strong> of your app with
            Firebase. Everything will update on the fly in real time.
          </p>
        </div>
        <div className="feature feature-admin">
          <h2>Create, Read, Update, Delete</h2>
          <p>
            Learn how to{' '}
            <strong>create, read, update and delete (CRUD)</strong>{' '}
            multiple pieces of your state, that are{' '}
            <strong>connected to each other</strong>. Your UI will
            automatically update based on the current state of the
            app.
          </p>
        </div>
        <div className="feature feature-hth">
          <h2>Mobx + React Router</h2>
          <p>
            We will use <strong>Mobx</strong> for state management and{' '}
            <strong>React Router V4</strong> for creating all the
            necessary URLs for our app. Some routes will be{' '}
            <strong>public</strong>, some will be{' '}
            <strong>protected</strong> and only available for logged
            in user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
