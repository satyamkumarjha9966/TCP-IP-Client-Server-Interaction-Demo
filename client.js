const net = require("net");
const port = 7070;
const host = "localhost";

const client = new net.Socket();
client.connect(port, host, function () {
  // Data That You Want To Send To TCP Server
  client.write(
    `satyam,001,003,000,001,008,016,210623 175542 ,,Z0000,0000,0000,0000,0000,0000#`
  );
  client.destroy();
});

client.on("error", function (error) {
  console.log(error.message);
});
