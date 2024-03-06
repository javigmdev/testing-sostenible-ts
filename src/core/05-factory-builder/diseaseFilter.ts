export type Note = {
  id: number;
  content: 'public' | 'private';
};

export type Case = {
  id: number;
  patientName: string;
  diagnosisId: number;
  diagnosisName: string;
  publicNotes: Note[];
  privateNotes: Note[];
};

export type Diagnosis = {
  id: number;
  name: string;
  location: string;
  system: string;
  origin: string;
  specie: string;
};

export class DiseaseFilter {
  private filters: string[] = [];
  constructor(
    private readonly cases: Case[],
    private readonly diagnoses: Diagnosis[],
  ) {}

  static create(cases: Case[], diagnoses: Diagnosis[]) {
    return new DiseaseFilter(cases, diagnoses);
  }

  addFilter(location: string) {
    this.filters.push(location);
  }

  get casesFiltered() {
    const fromDiagnosisToCasesFiltered = (d: Diagnosis) =>
      this.cases.filter(c => c.diagnosisId === d.id);
    const diagnosesFilteredBy = (location: string) =>
      this.diagnoses.filter(d => d.location === location);
    const fromFiltersToCases = (f: string) =>
      diagnosesFilteredBy(f).flatMap(fromDiagnosisToCasesFiltered);
    return this.filters.flatMap(fromFiltersToCases);
  }
}
