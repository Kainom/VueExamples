new Vue({
  el: "#desafio",
  data: {
    value: null,
  },
  methods: {
    showAlert(e) {
        alert("Hello World");
    },

    insertValue(e) {
      this.value = e.target.value;
    },

    
  },
});
