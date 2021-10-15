<template>
  <div>
      <h1 class="text-center text-danger">Homework</h1>
      <div class="container">
    <div class="row">
      <div class="col-3 p-2 bg-secondary card-deck " v-for="(item, index) in info" :key="index">
         <div class="card">
           <div class="card-header text-center">
               <b>{{item.id}}.</b>
               <b class="text-danger">{{item.first_name}}</b>
           
            </div>
            <div class="card-body">
                <div class="card-img  text-center">
                    <img class="img-fluid" :src="item.avatar" alt="">
                </div>
              <p class="mt-2 text-center">{{item.email}}</p>
            </div>
             <div class="card-footer">
              
                    <router-link :to="{name:'OneData', params:{ id: item.id }}">
                  <button type="button" class="btn btn-success float-right">Link</button>
               </router-link>
              
              
             </div>
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
      axios.get("https://reqres.in/api/users")
      .then(res => this.info = res.data.data)
    }

}
</script>

<style>

</style>