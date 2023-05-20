import React from 'react';
import Header from '../Home/Sheard/Header/Header';
import banner3 from '../../asetss/gallary/photo8.jpg'

const Blogger = () => {
    return (
        <div className='mb-20'>
            <Header></Header>
            <div className="carousel w-full mt-20 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img w-full h-[400px] overflow-hidden'>
                        <img src={banner3} alt="" className="" />
                    </div>
                    <div className="absolute text-center transform -translate-y-1/2 left-1/4 top-1/2">
                        <h2 className="text-amber-200 text-5xl font-bold">
                            Enjoy Vacation Blog With Pack Bags Team
                        </h2>
                        <h2 className='mt-12 text-5xl font-bold text-amber-500'> </h2>
                    </div>
                </div>
            </div>

            <div className='w-[1000px] mx-auto'>

                <div>
                    <h1 className='text-5xl mt-10 mb-6'> <span className='font-bold'>1.Question:</span> Explore key differences between SQL and NoSQL databases and learn which type of database is best for various use cases?</h1>
                    <p className='text-xl'>
                        SQL is a decades-old method for accessing relational databases, and most who work with databases are familiar with it. As unstructured data, amounts of storage and processing power and types of analytics have changed over the years, however, we’ve seen different database technologies become available that are a better fit for newer types of use cases. These databases are commonly called NoSQL.

                        SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data. <br></br>

                        <span className='font-bold my-5'>The five critical differences between SQL and NoSQL are:</span> <br></br>

                        1.SQL databases are relational, and NoSQL databases are non-relational.<br></br>
                        2.SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br></br>
                        3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br></br>
                        4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column <br></br>
                        5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>

                <div>
                    <h1 className='text-5xl mt-10 mb-6'> <span className='font-bold'>2.Question:</span> What is JWT, and how does it work? </h1>
                    <p className='text-xl '>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    </p>
                    <h1 className='text-5xl mt-10 mb-6'> What Is JSON? </h1>
                    <p className='text-xl '>
                        For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                    </p>
                </div>

                <div>
                    <h1 className='text-5xl mt-10 mb-6'> <span className='font-bold'>3.  Question:</span> What is the difference between javascript and NodeJS?</h1>
                    <p className='text-xl '>
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />

                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br />

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br />

                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input. <br />

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.

                        If you’re interested in becoming a Node.js developer, check out KnowledgeHut’s best Node.js course today to get started.
                    </p>
                </div>

                <div>
                    <h1 className='text-5xl mt-10 mb-6'> <span className='font-bold'>4.Question:</span> How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='text-xl '>
                        NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.

                        How does Node.js handle multiple requests?
                        The event-driven model is very efficient and allows NodeJS to handle thousands of concurrent requests with ease.

                        Node.js uses two concepts

                        Non-blocking I/O
                        Asynchronous

                        Whenever a client sends a request the single thread will send that request to someone else. The current thread will not be busy working with that request. There are workers working for the server. The server sends the request to the worker, the worker further sends it to the other server and waits for the response. In the meantime if there is another request the thread will send it to another worker and the worker will wait for the response from the another server.

                        In this way the single thread will always be available to take the requests from the client. It will not block the requests.

                        How is NodeJS better than traditional multithreaded request response model?
                        With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
                    </p>
                    <h1 className='text-5xl mt-10 mb-6'> What Is ? </h1>
                    <p className='text-xl '>
                        For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Blogger;