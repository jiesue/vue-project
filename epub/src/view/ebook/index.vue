<template>
  <div>
     <ebook-title></ebook-title>
    <ebook-reader />
    <ebook-menu></ebook-menu> 
  </div>
</template>
<script>
import EbookReader from "@/components/ebook/EbookReader";
import EbookTitle from "@/components/ebook/EbookTitle";
import EbookMenu from "@/components/ebook/EbookMenu.vue";

export default {
  name: "Ebook",
  components: { EbookReader,EbookTitle,EbookMenu }
};
</script>
<style lang="scss" scoped>

</style>

