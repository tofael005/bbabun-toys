import React from 'react';
import useTitle from '../Hooks/UseTitleHooks';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-6">Our Latest Blog <span className="text-[#6e9426]">questions?</span></h1>
            <article className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 mt-12 px-4 mb-20">
                <div className="p-3 shadow-md rounded-md border">
                    <h1 className="text-2xl font-semibold my-3">What is an access token and refresh token?</h1>
                    <p className="text-gray-500 text-justify">An access token and a refresh token are both components of an authentication and authorization system commonly used in web applications and APIs. Here's an explanation of each:An access token is a security credential that is typically issued to a user or an application after a successful authentication process. It is a piece of information, often in the form of a string, that grants permission to access protected resources or perform certain actions on behalf of the authenticated user. Access tokens are usually short-lived and have an expiration time to enhance security. They are commonly used in stateless authentication systems like JSON Web Tokens (JWT) and OAuth.Together, access tokens and resources while minimizing the need for repetitive user authentication.</p>
                </div>
                <div className="p-3 shadow-md rounded-md border">
                    <h1 className="text-2xl font-semibold my-3">Compare SQL and NoSQL databases?</h1>
                    <p className="text-gray-500 text-justify">SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems that serve different purposes and have distinct characteristics. Here's a comparison between the two:SQL databases use a structured data model based on tables with predefined schemas, where data is organized in rows and columns. Each row , and each column represents a specific attribute or field.
                    NoSQL databases use a flexible and schema-less data model, allowing for dynamic and unstructured data. They can store data in various formats, such as key-value pairs, documents, graphs, or wide-column stores.Ultimately, the choice between SQL and NoSQL databases depends on the specific requirements of your application, the nature of.</p>
                </div>
                <div className="p-3 shadow-md rounded-md border">
                    <h1 className="text-2xl font-semibold my-3">What is express js? What is Nest JS?</h1>
                    <p className="text-gray-500 text-justify">Express.js and Nest.js are both web application frameworks based on JavaScript/TypeScript that are used to build server-side applications. Here's a brief explanation of each:Express.js is a minimalist web framework for Node.js. It provides a simple and flexible way applications and APIs. It is lightweight and unopinionated, allowing developers to have more control over their application's architecture and design choices. Express.js provides a set of features for routing, middleware, request handling, and response management, making it easy to handle HTTP requests and build order, and the output of order, and the output of order, and the output of order, and the output of order, and the output of inspired by Angular. It aims to provide an opinionated and structured approach to building scalable and maintainable server-side applications. Nest.js incorporates concepts from object-oriented.</p>
                </div>
                <div className="p-3 shadow-md rounded-md border">
                    <h1 className="text-2xl font-semibold my-3">What is MongoDB aggregate and how does it work?</h1>
                    <p className="text-gray-500 text-justify">MongoDB's aggregate is a powerful framework for performing advanced data analysis and manipulation operations on MongoDB collections. It allows you to process data using a pipeline of stages, where each stage performs a specific operation on the input documents and passes the result to the next stage.The aggregate pipeline consists of various stages that can be combined to perform complex data transformations. Each stage performs a specific task, such as filtering documents, grouping data, projecting specific fields, sorting, joining collections, and more. These stages are executed in order, and the output of a sequential order, and the output of each stage becomes the input for the next stage.The result of the aggregation pipeline is a cursor that can be iterated over tocess the output ac documents.</p>
                </div>
            </article>
        </div>
    );
};

export default Blog;