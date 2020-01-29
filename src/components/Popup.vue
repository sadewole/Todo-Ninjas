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
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: ""
    };
  }
};
</script>