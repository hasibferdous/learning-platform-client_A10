import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 ms-4'>
    <h3><u>Questions & Answers</u></h3>

<h5>4.1 what is `cors`?</h5>
<p>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.
 CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.</p>
<h5>4.2 Why are you using `firebase`? What other options do you have to implement authentication?</h5>
<p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.<p className='mt-3'><b>Why Should You Use Google Firebase?</b></p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.All of these can save you a significant amount of development cost, as you don't need to pay as high as developing from scratch. Firebase pricing is equally flexible. Although there are pay-as-you-go services, you can start on a free plan and use primary features if your app is still at its prime.

Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.
<p className='mt-3'><b>Other options do you have to implement 
authentication?
</b> </p>12 User Authentication Platforms [Auth0, Firebase Alternatives]

<ul>
<li>STYTCH</li>.
<li>Ory</li>.
<li>Supabase</li>.
<li>Okta</li>.
<li>PingIdentity</li>.
<li>Keycloak</li>.
<li>Frontegg</li>.
<li>Authress</li>.

</ul></p>


<h5>4.3 How does the private route work?</h5>
<p>The private route component is used to protect selected pages in a React app from unauthenticated users. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
<h5>4.4 What is Node? How does Node work?</h5>
<p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

<p className='mt-3'><b>Working of Node.js:</b></p> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

Node.js basically works on two concept

Asynchronous
Non-blocking I/O</p>
        </div>
    );
};

export default Blog;