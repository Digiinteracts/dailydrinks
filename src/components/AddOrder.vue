<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="order.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Price</label>
        <input
          class="form-control"
          id="price"
          required
          v-model="order.price"
          name="price"
          type="number"
        />
      </div>
      <div class="form-group">
        <label for="description">Note</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="order.description"
          name="description"
        />
      </div>

      <button @click="saveOrder" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newOrder">Add</button>
    </div>
  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";

export default {
  name: "add-order",
  data() {
    return {
      order: {
        id: null,
        title: "",
        description: "",
        published: false,
        price:0
      },
      submitted: false
    };
  },
  methods: {
    saveOrder() {
      var data = {
        title: this.order.title,
        description: this.order.description,
        published:false,
        price:this.order.price
      };

      OrderDataService.create(data)
      this.submitted = true;
    },
    
    newOrder() {
      this.submitted = false;
      this.order = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
