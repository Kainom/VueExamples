new Vue({
  el: "#desafio",
  data: {
    name: "Kainom",
    age: 20,
    img: "https://im.ziffdavisinternational.com/ign_br/screenshot/default/screenshot-4_n4bk.png",
  },
  methods: {
    threeTimeAge() {
      const value = this.age * 3;
      return `My age 3 times more ${value} years`;
    },
    random() {
      const min = 0;
      const max = 1;
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      return `The number is ${random}`;
    },
  },
});
