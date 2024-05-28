import * as io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
function App() {
  return (
    <>
      <div className="">
        <p className="">
          Hi there
        </p>
      </div>
    </>
  )
}

export default App
