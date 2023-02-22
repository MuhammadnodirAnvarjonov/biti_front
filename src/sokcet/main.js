import { io } from 'socket.io-client';
// const BASE_URL = 'http://194.113.153.92:63000'
const BASE_URL = 'http://localhost:5001'
class SocketioService {
  socket;
  constructor() { }
  connect() {
    this.socket = io(BASE_URL, {
      query: {
        token: localStorage.getItem("token"),
      },
    });
  }

}

export default new SocketioService();