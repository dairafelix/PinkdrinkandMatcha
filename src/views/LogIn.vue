<template>
  <form class="login-form">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button type="submit" class="bg-rose-300 px-4 py-2">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
body {
  @apply bg-pink-100;
}
.login-form {
  @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
