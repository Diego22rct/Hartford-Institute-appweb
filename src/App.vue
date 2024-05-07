<script setup>
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
            </div>
        </template>
    </pv-toolbar>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
}
</style>
