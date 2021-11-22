

const app = new Vue({

  el: '#app',

  data: {
    numero: '',
    isLoading: true,
    httpError: false,
    
  },
  methods:{

    getNumber(){
      this.isLoading = true;

      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then((response) =>{

        console.log('this',this);
        // tutta la risposta
        console.log('response',response);

        // il JSON -> quello che a noi interessa
        console.log('response.data',response.data);

        const data = response.data;
     

        // in base a come è fatto ogni response.data prendiamo quello che ci serve
        console.log('Il nostro numero: ',data.response);
        this.numero = data.response;
        this.isLoading = false;
      })
      .catch((error) =>{
        console.log('KO',error);
        // solo n questo caso viene visulizzato l'erroe
        this.httpError = true;
      })
    }

  },
  mounted(){

    this.getNumber();
    

  }






})