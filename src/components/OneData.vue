<template>

 <div class="container">
     <div class="row">
         <h1>One Page</h1>
     </div>
    <div class="row">
      <div class="col-8 p-2 bg-secondary card-deck " >
         <div class="card">
           <div class="card-header text-center">
               <b>{{info.id}}.</b>
               <b class="text-danger">{{info.first_name}}</b>
           
            </div>
            <div class="card-body">
                <div class="card-img  text-center">
                    <img class="img-fluid" :src="info.avatar" alt="">
                </div>
              <p class="mt-2 text-center">{{info.email}}</p>
            </div>
             <div class="card-footer">
              
                    <!-- <router-link :to="{name:'OneData', params:{ id: item.id }}">
                  <button type="button" class="btn btn-success float-right">Link</button>
               </router-link> -->
               <button type="button" class="btn btn-success float-right">Back</button>
              
              
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

        info:[]
    }
},
created(){
    axios.get(`https://reqres.in/api/users/${this.$route.params.id}`)
    .then(ress => this.info = ress.data.data)
}

}
</script>

<style>

</style>