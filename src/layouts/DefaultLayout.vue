<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/">
          <font-icon icon="home" size="lg" />
          <ion-label color="grey" class="label">Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="orders" href="/order">
          <font-icon color="primary" icon="shopping-basket" size="lg" />
          <ion-label color="grey" class="label">Orders</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="cart" href="/cart">
          <font-icon icon="shopping-cart" size="lg" />
          <ion-label color="grey" class="label">Cart</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/account">
          <font-icon icon="user" size="lg" />
          <ion-label color="grey" class="label">Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faShoppingBasket,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faShoppingBasket, faShoppingCart, faUser);

export default defineComponent({
  name: "Layout",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
  },
});
</script>

<style lang="scss" scoped>
.label {
  font-size: 14px;
  margin-top: 5px;
}
</style>

<style lang="scss">
ion-tab-button * {
  color: var(--ion-color-grey);
  font-weight: 500;
}

.tab-selected * {
  color: var(--ion-color-primary) !important;
}
</style>
