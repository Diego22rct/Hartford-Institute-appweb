import http from "../../shared/services/base-api.services.js";

export class NursingApiService {
    constructor(props) {
        this.http = http;
        this.baseUrl = "/";
    }
    async getPatients() {
        return this.http.get(`${this.baseUrl}patients`);
    }
    async getPatientById(id) {
        return this.http.get(`${this.baseUrl}patients/${id}`);
    }
    async getExaminers() {
        return this.http.get(`${this.baseUrl}examiners`);
    }
    async getExaminerById(id) {
        return this.http.get(`${this.baseUrl}examiners/${id}`);
    }
    async getMentalExams() {
        return this.http.get(`${this.baseUrl}mental-state-exams`);
    }
    async getMentalExamById(id) {
        return this.http.get(`${this.baseUrl}mental-state-exams/${id}`);
    }
}

export default NursingApiService;