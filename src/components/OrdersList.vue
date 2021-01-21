<template>
  <div class="list row">
    
    <div class="col-md-6">
      <h4>Orders List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(order, index) in orders"
          :key="index"
          @click="setActiveOrder(order, index)"
        >
          {{ order.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllOrder">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentOrder">
        <h4>Orders</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentOrder.title }}
        </div>
        <div>
          <label><strong>Price:</strong></label> {{ (currentOrder.price)?currentOrder.price:0 }}
        </div>
        <div>
          <label><strong>Note:</strong></label> {{ currentOrder.description }}
        </div>

        <router-link :to="'/orders/' + currentOrder.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Order...</p>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";

export default {
  name: "Order-list",
  data() {
    return {
      orders: [],
      currentOrder: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveOrders() {
      this.orders = OrderDataService.getAll();
    },

    refreshList() {
      this.retrieveOrders();
      this.currentOrder = null;
      this.currentIndex = -1;
    },

    setActiveOrder(Order, index) {
      this.currentOrder = Order;
      this.currentOrder.id = index;
      this.currentIndex = index;
    },

    removeAllOrder() {
      OrderDataService.deleteAll();
      this.retrieveOrders();
    },
  },
  mounted() {
    this.retrieveOrders();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
