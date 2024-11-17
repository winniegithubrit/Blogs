<template>
  <div id="app">
  <UserMessage/>
  <NavbarPage/>
  </div>
</template>
<script>
import UserMessage from './components/UserMessage.vue'
import NavbarPage from './components/NavbarPage.vue';
export default{
  components:{
  UserMessage,
  NavbarPage

}
};


</script>
