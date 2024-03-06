import {
  Case,
  Diagnosis,
  DiseaseFilter,
} from '../../core/05-factory-builder/diseaseFilter';

describe('Disease filter', () => {
  let cases: Case[] = [];
  let diagnoses: Diagnosis[] = [];
  let diseaseFilter: DiseaseFilter;
  beforeEach(() => {
    cases = [
      {
        id: 1,
        patientName: 'Chupito',
        diagnosisId: 1,
        diagnosisName: 'Calicivirus',
        publicNotes: [{ id: 1, content: 'public' }],
        privateNotes: [{ id: 2, content: 'private' }],
      },
      {
        id: 2,
        patientName: 'Juliana',
        diagnosisId: 2,
        diagnosisName: 'Epilepsia',
        publicNotes: [{ id: 1, content: 'public' }],
        privateNotes: [],
      },
      {
        id: 3,
        patientName: 'Dinwell',
        diagnosisId: 3,
        diagnosisName: 'Otitis',
        publicNotes: [{ id: 1, content: 'public' }],
        privateNotes: [],
      },
    ];
    diagnoses = [
      {
        id: 1,
        name: 'Calicivirus',
        location: 'Vías respiratorias altas',
        system: 'Respiratorio',
        origin: 'Virus',
        specie: 'Gato',
      },
      {
        id: 2,
        name: 'Epilepsia',
        location: 'Cerebro',
        system: 'Neurológico',
        origin: 'Idiopático',
        specie: 'Perro, Gato',
      },
      {
        id: 3,
        name: 'Otitis',
        location: 'Oídos',
        system: 'Auditivo',
        origin: 'Bacteria',
        specie: 'Perro, Gato',
      },
      {
        id: 4,
        name: 'Bletaritis',
        location: 'Cabeza y cuello, Ojos',
        system: 'Sistema Tegumentario, Oftalmológico, Órganos de los sentidos',
        origin: 'Inflamatorio',
        specie: 'Perro, Gato',
      },
      {
        id: 5,
        name: 'Moquillo Felino (Panleucopenia)',
        location: 'Abdomen',
        system: 'Digestivo, Sistema Inmune',
        origin: 'Infeccioso',
        specie: 'Gato',
      },
      {
        id: 6,
        name: 'Cardiomiopatía',
        location: 'Tórax',
        system: 'Cardiovascular',
        origin: 'Degenerativo, Hereditario',
        specie: 'Perro, Gato',
      },
      {
        id: 7,
        name: 'Accidente Cerebrovascular',
        location: 'Cabeza y cuello',
        system: 'Sistema nervioso, cardiovascular',
        origin: 'Degenerativo, Metabólico, Inflamatorio',
        specie: 'Perro, Gato',
      },
      {
        id: 8,
        name: 'Moquillo Canino',
        location: 'Tórax, Abdomen, Sistema Tegumentario, Cabeza y cuello, Ojos',
        system:
          'Respiratorio, Digestivo, Tegumentario, Nervioso, Oftalmológico, Órganos de los sentidos',
        origin: 'Infeccioso',
        specie: 'Perro',
      },
    ];
    diseaseFilter = DiseaseFilter.create(cases, diagnoses);
  });

  it('filters cases when several diagnosis filters are applied together', () => {
    diseaseFilter.addFilter('Cerebro');
    diseaseFilter.addFilter('Vías respiratorias altas');

    const result = diseaseFilter.casesFiltered;

    expect(result.length).toBe(2);
    expect(result[1].patientName).toBe('Chupito');
    expect(result[0].patientName).toBe('Juliana');
  });
});
