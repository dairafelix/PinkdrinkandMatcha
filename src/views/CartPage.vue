<template>
  <div class="mx-auto w-full bg-rose-100 py-10">
<div class="shopping-cart">
  <!-- Title -->
  <div class="title">
    Shopping Cart
  </div>
 
  <!-- Product #1 -->
  <div class="item">
    <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image ">
      <img class="object-scale-down h-24 w-48" src="../assets/images/Tayaki-brown.png" alt="product" />
    </div>
 
    <div class="description">
      <span>Sticker</span>
      <span>Tayaki</span>
      <span>Brown</span>
    </div>
 
    <div class="quantity">
      <button class="plus-btn" type="button" name="button">+
      </button>
      <input type="text" name="name" value="1">
      <button class="minus-btn" type="button" name="button">-
      </button>
    </div>
 
    <div class="total-price pl-2">$5</div>
  </div>
 
  <!-- Product #2 -->
  <div class="item">
    <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img class="object-scale-down h-24 w-48" src="../assets/images/AvocadoPlush.png" alt="product"/>
    </div>
 
    <div class="description">
      <span>Sticker</span>
      <span>Avocado</span>
      <span>Color</span>
    </div>
 
    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        +
      </button>
      <input type="text" name="name" value="3">
      <button class="minus-btn" type="button" name="button">
        -
      </button>
    </div>
 
    <div class="total-price pl-2">$6</div>
  </div>
 
  <!-- Product #3 -->
  <div class="item">
    <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img class="object-scale-down h-24 w-48" src="../assets/images/peachDrink.png" alt="product" />
    </div>
 
    <div class="description">
      <span>Print</span>
      <span>Peach Drink</span>
      <span>Color</span>
    </div>
 
    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        +
      </button>
      <input type="text" name="name" value="1">
      <button class="minus-btn" type="button" name="button">
        -
      </button>
    </div>
 
    <div class="total-price pl-2">$10</div>
  </div>
  <hr class="container mx-auto" />
  <!-- Total-->
  <div class="item"> 
    <div class="buttons"> </div>
    <div class="image"> </div>
    <div class="description">Shopping Cart Total: </div>
     <div class="quantity p-20"></div>
    <div class="total-price pl-36">$21</div>
  </div>
</div>
<!--end Cart container-->
</div>
<div class="h-40"></div>
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
.shopping-cart {
  width: 750px;
  margin: 80px auto;
  background: white;
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;
 
  display: flex;
  flex-direction: column;
}

.title {
  height: 60px;
  border-bottom: 1px solid #E1E8EE;
  padding: 20px 30px;
  color: #b5c940;
  font-size: 18px;
  font-weight: 400;
}
 
.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}
 
.item:nth-child(3) {
  border-top:  1px solid #E1E8EE;
  border-bottom:  1px solid #E1E8EE;
}
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.delete-btn,
.like-btn {
  display: inline-block;
  Cursor: pointer;
}
.delete-btn {
  width: 18px;
  height: 17px;
}
.is-active {
  animation-name: animate;
  animation-duration: .8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}
 
@keyframes animate {
  0%   { background-position: left;  }
  50%  { background-position: right; }
  100% { background-position: right; }
}
.image {
  margin-right: 50px;
}
.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}
 
.description span {
  display: block;
  font-size: 14px;
  color: #43484D;
  font-weight: 400;
}
 
.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939E;
}

.quantity {
  padding-top: 20px;
  margin-right: 60px;
}
.quantity input {
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}
 
button[class*=btn] {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}
 
button:focus,
input:focus {
  outline:0;
}

.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}
@media (max-width: 800px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
  .buttons {
    margin-right: 20px;
  }
}
.divider {
  @apply flex h-20 text-2xl font-bold text-rose-300;
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

