import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="my-container py-8">
        <div data-aos="flip-down" className="relative md:w-[35%] mx-auto mb-20">
          <div className="h-16 absolute right-4 top-2/3 md:top-1/4 mask mask-hexagon-2 bg-[#80BD9E]">jahid</div>
          <div className="h-16 absolute left-4 bottom-1/2 md:bottom-1/4 mask mask-hexagon-2 bg-[#80BD9E]">jahid</div>

          <h1 className=" text-3xl font-bold mb-10 text-center">
            Welcome to My Blog
          </h1>
        </div>

        <div className="my-6">
          <h2 className="text-2xl text-[#80BD9E] font-semibold mb-2">
            1. What is an access token and refresh token?
          </h2>
          <p className="font-bold text-gray-500 ms-3"># Access Token</p>
          <p className="text-gray-800 ms-3">
            An access token is a credential used to access protected resources
            on a server. It is typically obtained after successful
            authentication and is used to authorize subsequent requests.
            <br />
            <p className="font-bold  mt-3 text-gray-500"># Refresh Token</p>A
            refresh token is a long-lived token used to obtain a new access
            token when the current one expires. It is usually stored securely on
            the client-side, either in an HTTP-only cookie or local storage.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-2xl text-[#80BD9E] font-semibold mb-2">
            2. Compare SQL and NoSQL databases?
          </h2>
          <p className="font-bold text-gray-500 ms-3"># SQL</p>
          <p className="text-gray-800 ms-3">
            SQL databases are based on a structured query language and use a
            predefined schema to organize data into tables with relationships.
            They provide strong consistency, ACID properties, and are suitable
            for complex, structured data.
            <br />
            <p className="font-bold text-gray-500 mt-3"># NoSQL</p>
            NoSQL databases, on the other hand, are non-relational and do not
            rely on a fixed schema. They offer high scalability, eventual
            consistency, and are suitable for unstructured or semi-structured
            data, and scenarios with high read/write loads.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-2xl text-[#80BD9E] font-semibold mb-2">
            3. What is Express.js? What is Nest.js?
          </h2>
          <p className="font-bold text-gray-500 ms-3"># Node.js</p>
          <p className="text-gray-800 ms-3">
            Express.js is a minimal and flexible Node.js web application
            framework. It provides a set of features for building web
            applications and APIs, handling HTTP requests, routing, middleware,
            and server-side logic.
            <br />
            <p className="font-bold text-gray-500 mt-3"># Nest.js</p>
            Nest.js is a progressive Node.js framework built on top of
            Express.js. It leverages TypeScript and follows a modular
            architecture pattern. Nest.js provides features like dependency
            injection, decorators, and declarative programming for building
            scalable and maintainable server-side applications.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-2xl text-[#80BD9E] font-semibold mb-2">
            4. What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-800 ms-3">
            MongoDB's aggregate is a powerful method used to perform advanced
            data aggregation and processing tasks. It works by creating an
            aggregation pipeline that consists of multiple stages, each
            processing the data in a specific way.
            <br />
            Each stage in the pipeline performs operations such as filtering,
            grouping, sorting, projecting, joining, and mathematical operations
            on the data. The result of one stage is passed as input to the next
            stage.
            <br />
            With the aggregate framework, you can perform complex queries,
            aggregations, and transformations directly within the MongoDB
            database, reducing the need to transfer large amounts of data to the
            client for processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
