<template>
  <div v-if="currentOrder" class="edit-form">
    <h4>Order</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input type="text" class="form-control" id="title"
          v-model="currentOrder.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Price</label>
        <input type="number" class="form-control" id="price"
          v-model="currentOrder.price"
        />
      </div>
      <div class="form-group">
        <label for="description">Note</label>
        <input type="text" class="form-control" id="description"
          v-model="currentOrder.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentOrder.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteOrder"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateOrder"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Order...</p>
  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";

export default {
  name: "order",
  data() {
    return {
      currentOrder: null,
      message: ''
    };
  },
  methods: {
    getOrder(id) {
      this.currentOrder = OrderDataService.get(id);
      this.currentOrder.id = id;
    },


    updateOrder() {
      OrderDataService.update(this.currentOrder.id, this.currentOrder)
        this.message = 'The Order was updated successfully!';
    },

    deleteOrder() {
      OrderDataService.delete(this.currentOrder.id)
        this.$router.push({ name: "orders" });
    }
  },
  mounted() {
    this.message = '';
    this.getOrder(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
