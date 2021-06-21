<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login Form</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <!-- <form novalidate></form> -->

      <!-- card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Sign In</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked" color="primary">email</ion-label>
            <ion-input
              v-model="email"
              name="email"
              @keyup.enter="login"
              type="text"
            ></ion-input>
          </ion-item>
          <ion-text color="danger">
            <p v-show="emailError" class="ion-margin-start">{{ emailError }}</p>
          </ion-text>

          <ion-item>
            <ion-label position="stacked" color="primary">Password</ion-label>
            <ion-input
              v-model="password"
              @keyup.enter="login"
              name="password"
              type="password"
            ></ion-input>
          </ion-item>
          <ion-text color="danger">
            <p v-show="passwordError" class="ion-margin-start">
              {{ passwordError }}
            </p>
          </ion-text>
          <ion-button expand="full" @click="login">Login</ion-button>
        </ion-card-content>
      </ion-card>
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
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
import { useMutation } from "@vue/apollo-composable";
import { loginDashboard } from "@/apollo/graphql";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import storage from "@/libs/storage";

export default defineComponent({
  name: "Login",

  setup() {
    const { mutate: signIn } = useMutation(loginDashboard);
    const router = useRouter();

    // Define a validation schema
    const schema = yup.object({
      email: yup
        .string()
        .required()
        .email(),
      password: yup
        .string()
        .required()
        .min(8),
    });

    // Create a form context with the validation schema
    const { validate: formValidate, resetForm } = useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } = useField(
      "password"
    );

    return {
      signIn,
      router,
      email,
      emailError,
      password,
      passwordError,
      formValidate,
      resetForm,
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
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },

  methods: {
    async login() {
      const formValid = await this.formValidate();
      if (formValid.valid) {
        const { data } = await this.signIn({
          // email: "demo@thetreedots.com",
          identity: this.email,
          password: "747b7a79787f7e7d",
        });

        if (data.signIn) {
          await storage.setItem("token", data.signIn.token);

          this.resetForm({
            values: {
              email: "",
              password: "",
            },
          });
          this.router.push("/tabs");
          this.openToast("Login success");
        } else {
          this.openToast("Email or password wrong!");
        }
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
