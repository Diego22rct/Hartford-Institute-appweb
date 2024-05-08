<script>
export default {
  name: "cardMentalExam.component",
  props: {
    exam: Object // Prop to receive the mental state exam data
  },
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img :alt="exam.patientName" :src="exam.photo" />
    </template>
    <template #title>{{exam.patientName}}</template>
    <template #subtitle>{{exam.birthDate}}</template>
    <template #content>
      <h3>
        Examiner: {{exam.examinerName}}
        <span class="text-sm text-gray-500">NPI: {{exam.examinerNationalProviderIdentifier}}</span>
      </h3>

    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <p class="text-sm text-gray-500">Exam Date: {{exam.examDate}}</p>
        <p class="text-sm text-gray-500">Total Score: {{exam.totalScore}}</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>