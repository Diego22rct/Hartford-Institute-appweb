<template>
    <section class="flex flex-column align-items-center justify-center">
        <pv-image src="/public/hero-image.jpg" alt="HIGN Logo" height="500" />
        <p>
          {{ $t('home.hero_text')}}
        </p>

    </section>
</template>

<script>
export default {
    
}
</script>

<style>
  p {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
  }
</style>