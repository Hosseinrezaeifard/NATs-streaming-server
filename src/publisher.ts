import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

console.clear();

stan.on("connect", async () => {
  console.info("publisher connected to nats!");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      price: 20,
      title: "concert",
    });
  } catch (error) {
    console.error(error);
  }
});
