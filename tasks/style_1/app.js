new Vue({
  el: "#desafio",
  data: {
    mudar: "",
    class1: "",
    class2: "",
    classChoice: "",
    novaClass: "",
    novaClass2: "",
    classe5: "",
    styles: {
      backgroundColor: "red",
      width: 100 + "px",
      height: 100 + "px",
      margin: 5 + "rem;",
    },
    blue: 0,
    transparent: 2,
    barProgress: {
      
      // backgroundColor:"red",
      background:
        "linear-gradient(to right, rgba(0,0,255," +
        0 +
        ") 0%, rgba(0,0,255," +
        0 +
        ")50%, rgba(0,0,0,0) 51%, rgba(0,0,0,0) 100%)",
    },
  },
  watch: {
  
  },
  computed: {
    trueClasse() {
      console.log(this.classChoice);
      return (this.classChoice =
        this.classChoice == "true" ? "true" : this.classChoice);
    },
    meuEstilo() {
      return {
        transform: "rotate(225deg)",
        transition: "transform 0.5s ease",
        backgroundColor: "yellow",
        width: 200 + "px",
        height: 200 + "px",
        margin: 7 + "rem",
        opacity: this.mudar == "destaque" ? 1 : 0.5,
        borderRadius: "50%",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      };
    },
  },
  methods: {
    iniciarEfeito() {
      this.mudar = this.mudar == "destaque" ? "encolher" : "destaque";
      console.log(this.mudar);
    },
    progressBar() {
      let valor = 0;
      tempo = setInterval(() => {
        console.log(this.progressBar);
        this.barProgress = {
          // backgroundColor:"red",
          background:
            "linear-gradient(to right, rgba(0,0,255," +
            2 +
            ") "+valor+"%, rgba(0,0,255," +
            2 +
            ")"+(valor+5)+"%, rgba(0,0,0,0) "+(valor+5)+"%, rgba(0,0,0,0)" +(valor+5)+"%)",
        };
        valor += 10;
        if(valor >= 150) clearInterval(tempo);

      }, 500);
    },
  },
});
