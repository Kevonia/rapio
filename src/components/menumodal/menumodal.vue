<style scoped lang="scss" src="./menumodal.scss"></style>
<script lang="ts" src="./menumodal.ts"></script>
<template>
  <div class="menumodal">
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="grid grid-cols-7">
          <div class="col-span-6">
            <p class="modal-card-title">Fried Chicken</p>

            <p class="text-2xl">${{ total | number("0,0") }}</p>
          </div>
          <div class="grid col-span-1">
            <b-field>
              <b-numberinput
                min="1"
                v-model="numberofItems"
                controls-position="compact"
              
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </header>
      <section class="modal-card-body">
        <b-collapse
          class="card"
          animation="slide"
          v-for="(collapse, index) of collapses"
          :key="index"
          :open="isOpen == index"
          @open="isOpen = index"
        >
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
          >
            <p class="card-header-title">
              {{ collapse.title }}
            </p>
            <a class="card-header-icon">
              <b-icon
                :icon="props.open ? 'chevron-circle-down' : 'chevron-circle-up'"
              >
              </b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content" v-if="collapse.fieldtype === 'text'">
              <b-field>
                <b-input maxlength="200" type="textarea"></b-input>
              </b-field>
            </div>
            <div class="content" v-if="collapse.fieldtype === 'radio'">
              <div class="grid grid-cols-4">
                <b-radio
                  v-for="item in collapse.data"
                  :key="item.name"
                  :name="collapse.title"
              
                  @input="Update(item.price, item.name)"
                  :native-value="[item.name,item.price]"
                >
                  {{ `${item.name} ($${item.price} )` }}
                </b-radio>
              </div>
            </div>
            <div class="content" v-if="collapse.fieldtype === 'counter'">
              <div class="grid grid-cols-3 gap-2">
                <div v-for="item in collapse.data" :key="item.name">
                  <div class="field">
                    <b-checkbox v-model="Order"	@input="AddSide()" :native-value="[item.name,item.price]">
                      {{ `${item.name} ($${item.price} )` }}
                    </b-checkbox>
                  </div>
                </div>

                <!-- <b-radio
                  v-for="item in collapse.data"
                  :key="item.name"
                  :name="collapse.title"
                  @input="Update(item.price, item.name)"
                  :native-value="item.price"
                >
                  {{ `${item.name} ($${item.price} )` }}
                </b-radio> -->
              </div>
            </div>
          </div>
        </b-collapse>
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-primary" icon-left="shopping-basket" @click="updateCart()">
          Add to Cart
        </b-button>
      </footer>
    </div>
  </div>
</template>