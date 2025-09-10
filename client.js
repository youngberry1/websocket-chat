const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => console.log('I have connected to the server, now let\s proceed');


socket.onmessage = (e) => {
  console.log(`Server says:`, e.data);
  addMessage(e.data);
}


socket.onclose = () => console.log("Disconnected from server");


function sendMessage(msg) {
  if (socket.readyState === 1) {
    socket.send(msg);
  }
}


function addMessage(msg) {
  let chat = document.getElementById('chat');
  let p = document.createElement('p');
  p.textContent = msg;
  chat.appendChild(p);
}

document.getElementById('button').addEventListener('click', () => {
  const msg = document.getElementById('msgInput').value.trim();
  sendMessage(msg || "Hello Server, message from client");
  document.getElementById('msgInput').value = '';
})

function handleKeydown(e) {
  if (e.key === 'Enter') {
    const msg = document.getElementById('msgInput').value.trim();
    sendMessage(msg || "Hello Server, message from client");
    document.getElementById('msgInput').value = '';
  }
}

document.getElementById('msgInput').addEventListener('keydown', handleKeydown);