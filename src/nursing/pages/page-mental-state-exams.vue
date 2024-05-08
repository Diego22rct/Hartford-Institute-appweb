/**
 * @name page-mental-state-exams
 * @description Vue component for the page displaying mental state exams.
 */
<script>
import nursingApiService from "../services/nursingApi.service.js";
import cardMentalExamComponent from "../components/cardMentalExam.component.vue";

export default {
  name: "page-mental-state-exams",
  components: {
    cardMentalExamComponent
  },
  data() {
    return {
      exams: [], // Array to store the mental state exams
      nursingApi: new nursingApiService(), // Instance of the nursingApiService class
    };
  },
  created() {
    this.getExams(); // Call the method to fetch the exams data
  },
  methods: {
    /**
     * @name getExams
     * @description Fetches the mental state exams data from the API and processes it
     */
    async getExams() {
      try {
        // Fetch the mental state exams, examiners, and patients data concurrently
        const [mentalStateExamsResponse, examinersResponse, patientsResponse] = await Promise.all([
          this.nursingApi.getMentalExams(),
          this.nursingApi.getExaminers(),
          this.nursingApi.getPatients()
        ])

        const mentalStateExams = mentalStateExamsResponse.data; // Extract the mental state exams data
        const examiners = examinersResponse.data; // Extract the examiners data
        const patients = patientsResponse.data; // Extract the patients data

        // Process the mental state exams data and create a new array with required information
        this.exams = mentalStateExams.map(exam => {
          const patient = patients.find(patient => patient.id === exam.patientId); // Find the patient associated with the exam
          const examiner = examiners.find(examiner => examiner.id === exam.examinerId); // Find the examiner associated with the exam

          return {
            photo: patient.photoUrl, // Patient's photo URL
            patientName: `${patient.firstName} ${patient.lastName}`, // Patient's full name
            examinerName: `${examiner.firstName} ${examiner.lastName}`, // Examiner's full name
            birthDate: patient.birthDate, // Patient's birth date
            examDate: exam.examDate, // Exam date
            examinerNationalProviderIdentifier: examiner.nationalProviderIdentifier, // Examiner's national provider identifier
            totalScore: exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore, // Total score of the exam
          };
        });
        this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });//console.log(this.exams); // Log the processed exams data
      } catch (error) {
        console.log(error); // Log any errors that occur during the API calls
      }
    },
  },
}
</script>

<template>
    <div class="flex flex-column align-items-center justify-center">
        <h1>{{$t("nursing.title")}}</h1>

        <div class="align-content-center justify-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <card-mental-exam-component v-for="exam in exams" :key="exam.patientName" :exam="exam" />
        </div>
    </div>
</template>

<style scoped>

</style>