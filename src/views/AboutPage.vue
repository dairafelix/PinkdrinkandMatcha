<template>
 <div class="divider">
    <h1>ABOUT</h1>
  </div>
<div>
   <img class="py-10 mx-auto max-w-lg" src="../assets/images/about.jpg" />
</div>
   <div class="p-20 text-xl">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.</p>
   </div>

    <!--Footer -->
  <div class="footer">
    <h1 class="font-bold">ABOUT</h1>
    <a href="#" class="footer-item">About</a>
    <a href="#" class="footer-item">FAQ</a>
    <a href="#" class="footer-item">EMAIL</a>
    <a href="#" class="footer-item">SOCIAL MEDIA ICONS</a>
    <h1 class="footer-center">© PinkdrinkandMatcha 2022</h1>
  </div>
</template>

<style scoped lang="postcss">
.divider {
  @apply flex h-10 items-center justify-center text-2xl font-bold bg-rose-300 text-white;
}
.footer {
  @apply mx-auto w-full items-center justify-between bg-rose-300 pt-5 pl-5 text-white;
  &-item {
    @apply flex w-full items-center py-2;
  }
  &-center {
    @apply flex h-12 items-center justify-center;
  }
}
</style>
