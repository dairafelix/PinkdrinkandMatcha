<template>
  <!--Shop Banner -->
  <img class="w-full" src="banner.png" />
  <!-- New Items/Inventory-->
  <div class="divider">
    <h1>NEW ARRIVALS</h1>
  </div>
  <hr class="container mx-auto" />
  <!-- Items Dividers ex. Stickers | Pins & Keychains | Bookmarks | sticker sheets  |-->

  <hr class="container mx-auto" />
  <!-- Best Sellers-->
  <div class="divider">
    <h1>BEST SELLERS</h1>
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
.saleBanner {
  @apply flex h-12 items-center justify-center bg-[#b5c940] text-white;
}
nav {
  @apply flex h-40;
  img {
    @apply flex items-center justify-items-center;
  }
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;

    .menu {
      @apply flex gap-2;
      &-item {
        @apply rounded-md px-4 py-2 text-slate-400 hover:text-slate-600;
      }
      &-login {
        @apply rounded-md bg-rose-300 px-4 py-2 text-red-100 hover:bg-red-500;
      }
    }
  }
}
.divider {
  @apply flex h-20 items-center justify-center text-2xl font-bold text-rose-300;
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
