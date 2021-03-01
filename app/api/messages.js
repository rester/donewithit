import client from "./client";

const send = (message, listingId) => {
  console.log(message, listingId);
  return client.post("/messages", {
    message: message,
    listingId: listingId,
  });
};

export default {
  send,
};
