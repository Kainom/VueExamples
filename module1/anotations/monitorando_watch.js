//monitora as mudanças de uma determinada variável e responde a essas mudanças
// semelhante ao que acontece em react com os estados
// difere-se de computed pois pode trabalhar com async propertys
// ou seja,não necessita voltar os dados no exato momento de requisição


	vue = {
		data:
		{
		   assistido:0,	
		   assincrono:0.
		},
	     watch:
		{
		  assistido:function(novoValue,antigoValue){
				  this.assistido = novoValue;
		  },
		  assincrono(){
		  setInterval(()=>{
		       this.assincrono++; 
                 },2000)
			
		 }
		  
	        }
	      }

   console.log(vue.data.assincrono++); // assicrono = 1
   console.log(vue.data.assincrono); // assincrono == 1 -> com vue  ==2;
