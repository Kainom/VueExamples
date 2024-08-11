// Metodos computados servem para evitar a chamada de metodos que não
// sofreram alterações internas,ou que tal propriedade nao o alterou
//  em sintáse ele utiliza um "cache" afim de nao realizar chamadas desnecessárias

// observe que no caso abaixo a função só sera chamada se de fato contador for alterado
// do contrário,o computed evita um recalcúlo inútil
// semelhante ao conceito de renderização em react,sendo utilizado somente quando há alterações de fato

 computed:{
            resultado: function () {
                return this.contador >= 5 ? "Maior ou igual a 5" : "Menor que 5";
            }
  },
