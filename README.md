<h2><strong>WebSocket Chat App</strong></h2>
<p>A real-time chat application built with Node.js and the <code>ws</code> library, featuring a responsive interface and seamless WebSocket communication.</p>

<h3><strong>Features</strong></h3>
<ul>
  <li>Real-time bidirectional communication using WebSockets</li>
  <li>Responsive design optimized for both desktop and mobile devices</li>
  <li>Intuitive message sending via Enter key or Send button</li>
  <li>Message echo functionality with timestamps</li>
  <li>Clean, modern user interface</li>
</ul>

<h3><strong>Project Structure</strong></h3>
<ul>
  <li>├── index.html &nbsp;&nbsp;&nbsp;&nbsp; # Frontend chat interface</li>
  <li>├── client.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Client-side WebSocket logic and UI handling</li>
  <li>├── server.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Node.js WebSocket server implementation</li>
  <li>├── style.css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Styling and responsive design</li>
  <li>├── package.json &nbsp; # Project dependencies and metadata</li>
  <li>└── package-lock.json &nbsp; # Dependency version locking</li>
</ul>

<h3><strong>Prerequisites</strong></h3>
<ul>
  <li>Node.js (version 14 or higher recommended)</li>
  <li>npm (included with Node.js installation)</li>
</ul>

<h3><strong>Installation &amp; Setup</strong></h3>

<p><strong>1. Clone the repository</strong></p>
<pre><code>git clone https://github.com/YOUR_GITHUB_USERNAME/websocket-chat.git
cd websocket-chat
</code></pre>

<p><strong>2. Install dependencies</strong></p>
<pre><code>npm install
</code></pre>

<p><strong>3. Start the WebSocket server</strong></p>
<pre><code>node server.js
</code></pre>
<p>Server will start running at: <code>ws://localhost:8080</code></p>

<p><strong>4. Launch the client application</strong></p>
<ul>
  <li>Open <code>index.html</code> directly in your web browser</li>
  <li>Or use a local server (recommended), such as:</li>
</ul>

<pre><code># VS Code Live Server extension
# or
python3 -m http.server 3000
# or
npx http-server
</code></pre>

<p><strong>5. Start chatting!</strong></p>
<ul>
  <li>Type messages in the input field</li>
  <li>Send using the Enter key or clicking the Send button</li>
  <li>Monitor connection status and messages in the browser console and server terminal</li>
</ul>

<h3><strong>Usage Notes</strong></h3>
<ul>
  <li>The server echoes all messages back to the client with a timestamp</li>
  <li>Connection status is displayed in the chat interface</li>
  <li>Multiple clients can connect to the same server instance</li>
  <li>Check browser console and server terminal for connection logs and debugging information</li>
</ul>
