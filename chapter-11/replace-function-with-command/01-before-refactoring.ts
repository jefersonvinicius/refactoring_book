function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
    }

    result -= Math.max(healthLevel - 5, 0);
    return result;
}
