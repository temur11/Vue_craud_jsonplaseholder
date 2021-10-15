<template>
  <div class="container">
    <div class="row">
      <div class="col-3 p-2 bg-secondary card-deck " v-for="item in info" :key="item.id">
         <div class="card">
           <div class="card-header text-center"><b>{{item.id}}</b> </div>
            <div class="card-body">
              <p>{{item.title}}</p>
            </div>
             <div class="card-footer">
               
              
                  <button type="button" class="btn btn-success float-right">Link</button>
              
            
                 
              
              
             </div>
         </div>
      </div>
    </div>
     
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      name: 'Olim',
      info:[]

    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(respons =>this.info = respons.data)
    
  }

}
</script>

<style>

</style>