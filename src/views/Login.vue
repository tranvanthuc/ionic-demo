<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <form novalidate>
        <ion-item>
          <ion-label position="stacked" color="primary">email</ion-label>
          <ion-input
            v-model="identity"
            @keyup.enter="login"
            type="text"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked" color="primary">Password</ion-label>
          <ion-input
            v-model="password"
            @keyup.enter="login"
            name="password"
            type="password"
          ></ion-input>
        </ion-item>

        <ion-button @click="login">Login</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonButton,
  IonInput,
  IonTitle,
  IonContent,
  IonLabel,
  IonHeader,
  IonItem,
  IonToolbar,
  toastController,
  IonPage,
} from "@ionic/vue";
import { useMutation } from "@vue/apollo-composable";
import { loginDashboard } from "@/apollo/graphql";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",

  setup() {
    const { mutate: signIn } = useMutation(loginDashboard);
    const router = useRouter();

    return {
      signIn,
      router,
    };
  },

  data() {
    return {
      identity: "",
      password: "",
    };
  },

  components: {
    IonPage,
    IonButton,
    IonInput,
    IonTitle,
    IonContent,
    IonLabel,
    IonHeader,
    IonItem,
    IonToolbar,
  },

  methods: {
    async login() {
      const { data } = await this.signIn({
        // identity: "demo@thetreedots.com",
        identity: this.identity,
        password: "747b7a79787f7e7d",
      });
      if (data.signIn) {
        localStorage.setItem("token", data.signIn.token);
        this.identity = "";
        this.password = "";
        this.router.push("/tabs");
        this.openToast("Login success");
      } else {
        this.openToast("Email or password wrong!");
      }
    },

    async openToast(message) {
      const toast = await toastController.create({
        message,
        duration: 2000,
        position: "top",
      });
      return toast.present();
    },
  },
});
</script>

<style scoped></style>
