import { io } from 'socket.io-client';
// const URl = "http://194.113.153.92:63010"
const URl = "http://localhost:5001"
class SocketioService {
  socket;
  constructor() { }
  connect() {
    this.socket = io(URl, {
      query: {
        token: localStorage.getItem("token"),
      },
    });
  }

}

export default new SocketioService();