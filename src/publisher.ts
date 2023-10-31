import nats from "node-nats-streaming";

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

console.clear();

stan.on("connect", () => {
  console.info("publisher connected to nats!");
  const data = JSON.stringify({
    id: "123",
    price: 20,
    title: "concert",
  });
  stan.publish("ticket:created", data, () => {
    console.log("event published");
  });
});
