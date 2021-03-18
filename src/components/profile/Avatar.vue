<template>
  <div class="md:text-center">
    <div class="bg-gray-300" style="height: 120px; width: 120px;">
<!--      <img-->
<!--          :src="'/img/apple-touch-icon-180x180.png'"-->
<!--          alt="Amirrea Nasiri"-->
<!--      />-->
      <img alt="Vue logo" src="../../assets/logo.png" />

    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      name: {
        firstName: 'Filip',
        lastName: 'Vanden Eynde'
      },
      role: 'A challenge-loving web developer'
    }
  },
}
</script>

<style scoped lang="scss">

</style>
