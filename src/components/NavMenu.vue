<script setup></script>

<template>
  <div class="saleBanner">
    <h3>Now offering International Shipping! | Free US shipping on orders over $35 with code FREESHIPPING</h3>
  </div>
  <nav>
    <div class="wrapper">
      <img width="300" src="logo.png" />
      <div class="menu">
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">Shop</a>
        <a href="#" class="menu-item">About</a>
        <!--Display the number of items on cart-->
        <a href="#" class="menu-item">🛒(0)</a>
        <a href="#" class="menu-login">Logout</a>
      </div>
    </div>
  </nav>
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
    @apply mx-auto flex w-full items-center justify-between px-5;
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
</style>
