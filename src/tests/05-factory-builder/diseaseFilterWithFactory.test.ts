import {
  Case,
  Diagnosis,
  DiseaseFilter,
} from '../../core/05-factory-builder/diseaseFilter';

describe('Disease filter', () => {
  it('filters cases when several diagnosis filters are applied together', () => {
    const searchCriteria1 = 'Vías respiratorias altas';
    const searchCriteria2 = 'Cerebro';
    const diagnoses = [
      createDiagnosis(1, searchCriteria1),
      createDiagnosis(2, searchCriteria2),
      createDiagnosis(3, 'Irrelevant-location'),
    ];
    const expectedName1 = 'Chupito';
    const expectedName2 = 'Juliana';
    const cases = [
      createCase(1, expectedName1),
      createCase(2, expectedName2),
      createCase(3, 'Irrelevant-name'),
    ];
    const diseaseFilter = DiseaseFilter.create(cases, diagnoses);
    diseaseFilter.addFilter(searchCriteria2);
    diseaseFilter.addFilter(searchCriteria1);

    const result = diseaseFilter.casesFiltered;

    expect(result.length).toBe(2);
    expect(result[1].patientName).toBe(expectedName1);
    expect(result[0].patientName).toBe(expectedName2);
  });
});

function createDiagnosis(id: number, location: string): Diagnosis {
  return {
    id: id,
    name: 'irrelevant-name',
    location: location,
    system: 'irrelevant-name',
    origin: 'irrelevant-name',
    specie: 'irrelevant-name',
  };
}

function createCase(diagnosisId: number, patientName: string): Case {
  return {
    id: 0,
    patientName: patientName,
    diagnosisId: diagnosisId,
    diagnosisName: 'Irrelevant-diagnosisName',
    publicNotes: [],
    privateNotes: [],
  };
}
