<script>
import nursingApiService from "../services/nursingApi.service.js";
import {onMounted} from "vue";
export default {
  name: "page-mental-state-exams",
  data() {
    return {
      exams: [],
      nursingApi: new nursingApiService()
    };
  },
  created() {
    this.getExams()
  },
  methods: {
    async getExams() {
      try {
      const [mentalStateExamsResponse, examinersResponse, patientsResponse] = await Promise.all([
        this.nursingApi.getMentalExams(),
        this.nursingApi.getExaminers(),
        this.nursingApi.getPatients()
      ]);

      const mentalStateExams = mentalStateExamsResponse.data;
      const examiners = examinersResponse.data;
      const patients = patientsResponse.data;

      this.exams = mentalStateExams.map(exam => {
        const patient = patients.find(patient => patient.id === exam.patientId);
        const examiner = examiners.find(examiner => examiner.id === exam.examinerId);

        return {
          photo: patient.photoUrl,
          patientName: `${patient.firstName} ${patient.lastName}`,
          examinerName: `${examiner.firstName} ${examiner.lastName}`,
          birthDate: patient.birthDate,
          examDate: exam.examDate,
          examinerNationalProviderIdentifier: examiner.nationalProviderIdentifier,
          totalScore: exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore,
        };
      });
      console.log(this.exams);
      } catch (error) {
      console.log(error);
      }
    },
    generateExams() {
      let exams = [];
      for (let i = 0; i < 10; i++) {
        exams.push({
          id: i,
          patient: {
            id: i,
            name: "Patient " + i
          },
          examiner: {
            id: i,
            name: "Examiner " + i
          },
          date: new Date().toISOString()
        })
      }
      this.exams = exams;
    }
  },
}
</script>

<template>
    <div class="flex flex-column align-items-center justify-center">
        <h1>Mental State Exams</h1>
        <p>Page for mental state exams</p>
    </div>
</template>

<style scoped>

</style>