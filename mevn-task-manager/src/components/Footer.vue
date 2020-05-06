<template>
  <footer id="custom-footer">
    <span class="mr-4">{{ year }} Sofia Sereti</span>
  </footer>
</template>

<script>

  export default {
    name: 'Footer',
    data:function(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
