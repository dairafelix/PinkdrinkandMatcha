<template>
  <div class="mx-auto w-full bg-rose-100 py-10">
    <div class="shopping-cart">
      <!-- Title -->
      <div class="title">Shopping Cart</div>

      <!-- Product #1 -->
      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          <img class="h-24 w-48 object-scale-down" src="../assets/images/Tayaki-brown.png" alt="product" />
        </div>

        <div class="description">
          <span>Sticker</span>
          <span>Tayaki</span>
          <span>Brown</span>
        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" name="button">+</button>
          <input type="text" name="name" value="1" />
          <button class="minus-btn" type="button" name="button">-</button>
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
          <img class="h-24 w-48 object-scale-down" src="../assets/images/AvocadoPlush.png" alt="product" />
        </div>

        <div class="description">
          <span>Sticker</span>
          <span>Avocado</span>
          <span>Color</span>
        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" name="button">+</button>
          <input type="text" name="name" value="3" />
          <button class="minus-btn" type="button" name="button">-</button>
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
          <img class="h-24 w-48 object-scale-down" src="../assets/images/peachDrink.png" alt="product" />
        </div>

        <div class="description">
          <span>Print</span>
          <span>Peach Drink</span>
          <span>Color</span>
        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" name="button">+</button>
          <input type="text" name="name" value="1" />
          <button class="minus-btn" type="button" name="button">-</button>
        </div>

        <div class="total-price pl-2">$10</div>
      </div>
      <hr class="container mx-auto" />
      <!-- Total-->
      <div class="item">
        <div class="buttons"></div>
        <div class="image"></div>
        <div class="description">Shopping Cart Total:</div>
        <div class="quantity p-20"></div>
        <div class="total-price pl-36">$21</div>
      </div>
    </div>
    <!--end Cart container-->
  </div>
  <div class="h-40"></div>
  <!--Footer -->
  <!--Footer -->
  <div class="footer">
    <h1 class="font-bold">Contact Us</h1>
    <RouterLink :to="{ name: 'About' }" href="#" class="menu-item">About</RouterLink>
    <a href="#" class="footer-item">FAQ</a>
    <a href="mailto:someone@example.com" class="footer-item">EMAIL</a>
    <div class="flex space-x-2">
      <!-- Facebook -->
      <a href="https://www.facebook.com/profile.php?id=100021330612232&mibextid=LQQJ4d" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-7 w-7" style="color: #ffffff">
          <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com Licensehttps://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </a>
      <!-- Instagram -->
      <a href="https://instagram.com/pinkdrinkandmatcha?igshid=YWJhMjlhZTc=" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7" style="color: #ffffff">
          <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License -
          https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </a>
      <!-- Pinterest -->
      <a href="#!" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-7 w-7" style="color: #ffffff">
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
          />
        </svg>
      </a>
    </div>
    <h1 class="footer-center">© PinkdrinkandMatcha 2022</h1>
  </div>
</template>

<style scoped lang="postcss">
.shopping-cart {
  width: 750px;
  margin: 80px auto;
  background: white;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
}

.title {
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
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
  border-top: 1px solid #e1e8ee;
  border-bottom: 1px solid #e1e8ee;
}
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.delete-btn,
.like-btn {
  display: inline-block;
  cursor: pointer;
}
.delete-btn {
  width: 18px;
  height: 17px;
}
.is-active {
  animation-name: animate;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: right;
  }
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
  color: #43484d;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939e;
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
  color: #43484d;
  font-weight: 300;
}

button[class*='btn'] {
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
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
  outline: 0;
}

.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
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
