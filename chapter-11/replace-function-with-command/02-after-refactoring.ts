function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
    private candidate: any;
    private medicalExam: any;
    private scoringGuide: any;
    private result = 0;
    private healthLevel = 0;
    private highMedicalRiskFlag = false;

    constructor(candidate, medicalExam, scoringGuide) {
        this.candidate = candidate;
        this.medicalExam = medicalExam;
        this.scoringGuide = scoringGuide;
    }

    execute() {
        this.result = 0;
        this.healthLevel = 0;
        this.highMedicalRiskFlag = false;

        scoreSmoking();
        let certificationGrade = "regular";
        if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
            certificationGrade = "low";
            this.result -= 5;
        }

        this.result -= Math.max(this.healthLevel - 5, 0);
        return this.result;
    }

    private scoreSmoking() {
        if (this.medicalExam.isSmoker) {
            this.healthLevel += 10;
            this.highMedicalRiskFlag = true;
        }
    }
}
