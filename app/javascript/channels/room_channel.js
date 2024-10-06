import consumer from "channels/consumer"

window.app = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    alert(data["message"])
  },

  speak: function() {
    return this.perform('speak', {message: message});
  }
});
