<h3><strong>WebSocket Chat App</strong></h3>
<p>A real-time chat application built with Node.js and the ws library, featuring a responsive interface and seamless WebSocket communication.
Features</p>
<pre><code>ꞏ Real-time bidirectional communication using WebSockets

ꞏ Responsive design optimized for both desktop and mobile devices

ꞏ Intuitive message sending via Enter key or Send button

ꞏ Message echo functionality with timestamps

ꞏ Clean, modern user interface
</code></pre>
<h3><strong>Project Structure</strong></h3>
<ul>
<li>├── index.html          # Frontend chat interface</li>
<li>├── client.js           # Client-side WebSocket logic and UI handling</li>
<li>├── server.js           # Node.js WebSocket server implementation</li>
<li>├── style.css           # Styling and responsive design</li>
<li>├── package.json        # Project dependencies and metadata</li>
<li>└── package-lock.json   # Dependency version locking</li>
</ul>
<h3><strong>Prerequisites</strong></h3>
<pre><code>ꞏ Node.js (version 14 or higher recommended)

ꞏ npm (included with Node.js installation)
</code></pre>
<h3><strong>### Installation &amp; Setup</strong></h3>
<p><strong>1. Clone the repository</strong></p>
<p><code>git clone https://github.com/YOUR_GITHUB_USERNAME/websocket-chat.git</code></p>
<p><code>cd websocket-chat </code></p>
<p><strong>2. Install dependencies</strong></p>
<p><code>npm install</code></p>
<p><strong>3. Start the WebSocket server</strong></p>
<p><code>node server.js</code></p>
<p>Server will start running at: <code>ws://localhost:8080</code></p>
<p><strong>4. Launch the client application</strong></p>
<ul>
<li>
<pre><code>Open index.html directly in your web browser
</code></pre>
</li>
<li>
<pre><code>Or use a local server (recommended) such as:
</code></pre>
</li>
<li>
<pre><code>    VS Code Live Server extension
</code></pre>
</li>
<li>
<pre><code>    Python's built-in server: python -m http.server 3000
</code></pre>
</li>
<li>
<pre><code>    Node.js http-server: npx http-server
</code></pre>
</li>
</ul>
<p><strong>5. Start chatting!</strong></p>
<ul>
<li>
<pre><code>Type messages in the input field
</code></pre>
</li>
<li>
<pre><code>Send using the Enter key or clicking the Send button
</code></pre>
</li>
<li>
<pre><code>Monitor connection status and messages in browser console and server terminal
</code></pre>
</li>
</ul>
<h3><strong>Usage Notes</strong></h3>
<ul>
<li>
<pre><code>The server echoes all messages back to the client with a timestamp
</code></pre>
</li>
<li>
<pre><code>Connection status is displayed in the chat interface
</code></pre>
</li>
<li>
<pre><code>Multiple clients can connect to the same server instance
</code></pre>
</li>
<li>
<pre><code>Check browser console and server terminal for connection logs and debugging information
</code></pre>
</li>
</ul><!----><!----> <!--[!--><!----><!----><!----><!--]-->
