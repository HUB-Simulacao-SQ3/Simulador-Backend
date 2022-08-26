const fs = require('fs');
const path = require('path');
const swaggerAutogen = require('swagger-autogen')();
const baseDocFile = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "REST API",
    description: ""
  },
  host: "localhost:3002",
  basePath: "/",
  schemes: ["http"],

  definitions: {
    user: {
      email: 'string', name: 'string', type: 'UsersTypeEnum', id: 'number', image: 'string'
    },
    userUpdate: {
      email: 'string', name: 'string', type: 'UsersTypeEnum', image: 'string'
    },
    cases: [
      {
        id: "3428b9ba-2424-11ed-b9c4-448a5b2c2d83",
        title: "Dor de barriga",
        description: "Um paciente chega com muita dor de barriga",
        scenery: "hospital",
        patient_id: "22ff7ccf-228c-11ed-9e3c-448a5b2c2d83",
        monitoring_id: "baacaa53-2276-11ed-9e3c-448a5b2c2d83",
        users_id: "6cb74180-aaaa-4e4b-99f0-77f391ff41f1",
        created_at: "2022-08-25T06:15:43.000Z",
        updated_at: "2022-08-25T06:15:43.000Z"
      }
    ],
    casesJoin: {
      id: "22ff7ccf-228c-11ed-9e3c-448a5b2c2d83",
      title: "Dor nas costas",
      description: "Um paciente chega com muita dor na costas",
      scenery: "hospital",
      patient_id: "22ff7ccf-228c-11ed-9e3c-448a5b2c2d83",
      monitoring_id: "baacaa53-2276-11ed-9e3c-448a5b2c2d83",
      users_id: "6cb74180-aaaa-4e4b-99f0-77f391ff41f1",
      created_at: "2022-08-23T05:34:39.000Z",
      updated_at: "2022-08-23T05:34:39.000Z",
      temperature: 22,
      pressure: 20,
      name: "José Pereira Santos",
      chief_complaint: "Dor nos olhos",
      professional: "Programador",
      age: 32,
      weight: 44,
      imc: 62
    },
    caseUpdate: {
      id: "b97ed6e8-228c-11ed-9e3c-448a5b2c2d83",
      title: "Dor nas costas",
      description: "Um paciente chega com muita dor na costas",
      scenery: "hospital"
    },
    caseInsert: {
      title: "Dor de barriga",
      description: "Um paciente chega com muita dor de barriga",
      scenery: "hospital",
      patient_id: "22ff7ccf-228c-11ed-9e3c-448a5b2c2d83",
      monitoring_id: "baacaa53-2276-11ed-9e3c-448a5b2c2d83",
      users_id: "6cb74180-aaaa-4e4b-99f0-77f391ff41f1"
    },
    monitoring: {
      id: "baacaa53-2276-11ed-9e3c-448a5b2c2d83",
      temperature: 22,
      pressure: 20,
      created_at: "2022-08-23T03:01:25.000Z",
      updated_at: "2022-08-23T03:04:45.000Z"
    },
    monitoringInsert: {
      temperature: 22,
      pressure: 34
    },
    monitoringUpdate: {
      id: "baacaa53-2276-11ed-9e3c-448a5b2c2d83",
      pressure: 20,
      temperature: 22
    },
    patients: {
      id: "22ff7ccf-228c-11ed-9e3c-448a5b2c2d83",
      name: "José Pereira Santos",
      chief_complaint: "Dor nos olhos",
      professional: "Programador",
      age: 32,
      weight: 44,
      imc: 62,
      created_at: "2022-08-23T05:34:39.000Z",
      updated_at: "2022-08-23T05:34:39.000Z"
    },
    patientInsert: {
      name: "José Pereira Santos",
      chief_complaint: "Dor nos olhos",
      professional: "Programador",
      age: 32,
      weight: 44,
      imc: 62
    },
    patientUpdate: {
      id: "abc85ac2-2258-11ed-9e3c-448a5b2c2d83",
      name: "José Pereira Santos",
      chief_complaint: "Dor nas costas",
      professional: "Programador",
      age: 32,
      weight: 44,
      imc: 62
    },
    quizs: {
      id: "159004fa-2424-11ed-b9c4-448a5b2c2d83",
      case_id: "b97ed6e8-228c-11ed-9e3c-448a5b2c2d83",
      type: "physic_exam",
      question: "Tirar exeme de sangue ?",
      response: "Qual é a resposta",
      file: null,
      created_at: "2022-08-25T06:14:51.000Z",
      updated_at: "2022-08-25T06:14:51.000Z"
    },
    quizInsert: {
      case_id: "b97ed6e8-228c-11ed-9e3c-448a5b2c2d83",
      type: "physic_exam",
      question: "Tirar exeme de sangue ?",
      response: "Qual é a resposta",
      file: ""
    },
    quizUpdate: {
      id: "31489300-23a3-11ed-9e3c-448a5b2c2d83",
      case_id: "b97ed6e8-228c-11ed-9e3c-448a5b2c2d83",
      type: "initial_analysis",
      question: "Quando começou os sintomas?",
      response: "A 9 dias atrás",
      file: null
    }
  }
}

fs.readdir(path.join(__dirname + '/../../routes/urls'), async (err: any, files: any) => {
  if (err) throw new Error(err);
  const outputFile = path.join(__dirname + '/swagger_output.json');
  swaggerAutogen(outputFile, files.map((fileName: string) => path.join(__dirname + `/../../routes/urls/${fileName}`)), baseDocFile);
});

