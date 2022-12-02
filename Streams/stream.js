const rabbit = require("rabbitmq-stream-js-client")

async function main() {
  const connection = await rabbit.connect({
    hostname: "localhost",
    port: 15672,
    username: "admin",
    password: "guest",
    vhost: "/",
  })

  await connection.close()
}

main()
  .then(() => console.log("done!"))
  .catch((res) => console.log("ERROR ", res))