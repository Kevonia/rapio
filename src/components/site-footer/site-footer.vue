<style scoped lang="scss" src="./site-footer.scss"></style>
<script lang="ts" src="./site-footer.ts"></script>

<style scoped>
.menu-label {
  color: white;
  font-size: 1.1rem;
}
</style>
<template>
  <div class="site-footer">
    <footer class="font-sans bg-black text-white py-8 px-4">
      <div
        class="mx-auto overflow-hidden flex flex-col md:flex-row justify-between"
      >
        <a href="/" class="block mr-4 w-40">
          <b-image :src="logo" alt="A random image"></b-image>
        </a>

        <div class="w-3/4 flex text-sm mt-6 lg:mt-0">
          <ul
            class="text-gray-700 list-none p-0 font-thin flex flex-col text-left"
          >
            <li
              class="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide"
            >
              NEWSLETTER SIGNUP
            </li>
            <li>
              <p class="inline-block py-2 px-3 text-white no-underline">
                Sign up to hear about special offers, <br />
                new restaurants and the latest juicy tidbits.
              </p>
            </li>

            <li>
              <div class="py-2 px-3">
                <b-input
                  v-model="email"
                  custom-class="inline-block  no-underline"
                ></b-input>
              </div>
            </li>

            <li>
              <div class="py-2 px-3">
                <b-button type="is-primary" @click="Subscribe()"
                  >Subscribe</b-button
                >
              </div>
            </li>
          </ul>
          <ul
            class="text-gray-700 list-none p-0 font-thin flex flex-col text-left"
          >
            <li
              class="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide"
            >
              QUICK LINKS
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"
                >Become a Partner</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"
                >Become a Rider</a
              >
            </li>
          </ul>

          <div class="text-gray-700 flex flex-col">
            <div
              class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide"
            >
              Follow Us
            </div>
            <div class="flex pl-4 justify-start">
              <a
                class="block flex items-center text-white hover:text-gray-500 mr-6 no-underline"
                href="#"
              >
                <b-icon
                  pack="fab"
                  icon="facebook"
                  size="is-small"
                  type="is-primary"
                >
                </b-icon>
              </a>
              <a
                class="block flex items-center text-white hover:text-gray-500 mr-6 no-underline"
                href="#"
              >
                <b-icon pack="fab" icon="twitter" size="is-small"> </b-icon>
              </a>
              <a
                class="block flex items-center text-white hover:text-gray-500 no-underline"
                href="#"
              >
                <b-icon pack="fab" icon="instagram" size="is-small"> </b-icon>
              </a>

              <a
                class="block flex items-center text-white hover:text-gray-500 no-underline"
                href="#"
              >
                <b-icon icon="instagram" size="is-small"> </b-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-4 mt-4 text-gray-700 border-t border-gray-900 text-center">
        <span class="text-white pt-8 px-4">
          © {{ new Date().getFullYear() }} Rapio Eats Delivery System
        </span>
      </div>
    </footer>
  </div>
</template>