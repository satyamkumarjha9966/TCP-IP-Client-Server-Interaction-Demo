// It Always Send Data in Binary Form
const net = require("net");
const port = 7070;
const server = net.createServer();

server.listen(port, () => {
  console.log("TCP Server is running on port " + port + ".");
});

server.on("connection", function (sock) {
  console.log("Connection Successfully Done");
  sock.on("data", function (data) {
    try {
      console.log(data.toString());

      // To Send Data on Different IP or Express Server
      // axios.post("http://13.235.204.41:8080/api/v1/rawdata", {
      //   data: data.toString(),
      // })

      sock.write(data);
      sock.end();
    } catch (error) {
      sock.write(data);
      sock.end();
      console.log(error.message);
    }
  });
  sock.on("error", function (error) {
    console.log(error.message);
  });
});
server.on("error", function (error) {
  console.log(error.message);
});
