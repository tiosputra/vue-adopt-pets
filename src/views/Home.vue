<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    <p>Cats {{ getAllCats.length }}</p>
    <p>All Animals {{ animalsCount }}</p>
    <button
      class="btn btn-primary"
      @click="togglePetForm"
    >{{ showPetForm ? 'cancel' : 'Add new pet' }}</button>

    <b-form @submit.prevent="handleSubmit" @reset="onReset" v-if="showPetForm">
      <b-form-group label="Pet's Name :">
        <b-form-input v-model="form.name" type="text" required placeholder="Enter pet name"></b-form-input>
      </b-form-group>

      <b-form-group label="Species :">
        <b-form-select id="input-3" :options="['cats', 'dogs']" v-model="form.species" required></b-form-select>
      </b-form-group>

      <b-form-group label="Age :">
        <b-form-input v-model="form.age" type="number" required placeholder="Enter pet age"></b-form-input>
      </b-form-group>

      <b-form-group label="Breed :">
        <b-form-input v-model="form.breed" type="text" required placeholder="Enter breed"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      form: {
        name: "",
        age: "",
        breed: "",
        species: ""
      },
      showPetForm: false
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats"])
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age, breed } = this.form;

      const payload = {
        species,
        pet: { name, age, breed }
      };

      this.addPet(payload);

      // reset form after submit
      this.form = {
        name: "",
        age: "",
        breed: "",
        species: ""
      };
    },
    onReset() {
      console.log("reset");
    }
  }
};
</script>
