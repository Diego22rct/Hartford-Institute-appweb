<script>
import {ref, onMounted} from 'vue';
export default {
  name: 'App',
  title: 'HIGN',
  data() {
    return {
      nowLocale: ref(this.$i18n.locale),
      availableLocales: ref([]),
      isShowingLocalesList: false,
    };
  },
  setup() {
  },
  methods: {
    showLocalesList() {
      this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
      if (this.availableLocales.length > 0) {
        this.isShowingLocalesList = !this.isShowingLocalesList;
        return;
      }
      if (this.$i18n.availableLocales.length === 0) {
        return;
      }
      this.$i18n.availableLocales.forEach(locale => {
        this.availableLocales.push(locale);
      });
      this.isShowingLocalesList = !this.isShowingLocalesList;

    },
  }
}
</script>

<template>
  <header>
    <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
          <div class="flex align-items-center gap-2">
              <pv-image src="/public/HIGN-logo.png" alt="HIGN Logo" height="50" />
          </div>
      </template>
      <template #end>
          <div class="flex align-items-center gap-2">
            <router-link to="/home">
              <pv-button label="Home" text plain severity="contrast" />
            </router-link>
            <router-link to="/nursing/mental-state-exams">
              <pv-button label="Mental exams" text plain severity="contrast" />
            </router-link>
            <pv-button @click="showLocalesList" :label="nowLocale.toLocaleUpperCase()" text plain severity="contrast" />
            <pv-listbox v-if="isShowingLocalesList" v-model="nowLocale" :options="availableLocales" @change="() => {this.$i18n.locale = nowLocale;
              this.isShowingLocalesList = false;}" />
          </div>
      </template>
    </pv-toolbar>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
}
</style>
