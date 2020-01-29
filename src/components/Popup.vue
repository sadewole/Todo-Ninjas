<template>
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{on}">
      <v-btn text v-on="on" class="success">Add a New Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" />
          <v-textarea label="information" v-model="content" prepend-icon="mdi-pencil" />

          <v-menu>
            <template v-slot:activator="{on}">
              <v-text-field
                v-on="on"
                label="Due date"
                :value="formattedDate"
                prepend-icon="mdi-calendar"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn text class="success mt-3 mx-0" @click="submit">Add projects</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: null
    };
  },
  methods: {
    submit() {
      //   console.log(this.title);
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>