// this page only for element locator

export class RegisterPages{
    
    //dashboard
    menjadiMentorButton = '.h-full > .relative > .font-semibold'

    applyAsMentorText = 'Apply as Mentor'
    applyAsMentorButton = '.rounded-\[400px\]'

    //mentor register
    registerByEmailButton = 'a > .ant-btn'
    registerByGoogleButton = '.mt-10 > .bg-white'

    //General Information
    mentorFullNameField = '#mentor-onboarding_fullName'
    mentorEmailField = '#mentor-onboarding_email'
    mentorPhoneNumberField = '#mentor-onboarding_whatsapp'
    mentorLinkedinField = '#mentor-onboarding_linkedInUrl'
    mentorIgUrlField = '#mentor-onboarding_instagramUrl'
    mentorInvitationCode = '#mentor-onboarding_invitationCode'
    nextButton = '.order-1'
    backButton = '.order-2'
    imageProfile = '.absolute > .flex'

    //Expertise
    karirBox = 'Karir' | 'Career'
    akademikBox = 'Akademik (S1/S2)' | 'Academics (S1/S2)'
    needHelpButton = '.right-4 > .flex'
    enButton = 'ENG'
    idButton = 'ID'
    careerCheckBox = ':nth-child(1) > .gap-4 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > .box-border > .absolute > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    academicCheckBox = ':nth-child(3) > .gap-4 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > .box-border > .absolute > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'

    expertiseListDropdown = '#expertise-list-form_careerPanels_0_category'
    dataExpertiseOption = 'Data'
    dataAnalystExpertiseOption = 'Data Analyst'

    academicListDropdown = '#expertise-list-form_academicPanels_0_category'
    beasiswaS1Option = 'Beasiswa S1'
    beasiswaUnggulanOption = 'Beasiswa Unggulan'

    //Career Experience
    companyNameField = '#companyName'
    // companyIndustryField = 'Pilih Industri Perusahaan'
    companyIndustryField = '#rc_select_9, #rc_select_5'
    roleLevelField = '#roleLevel'
    roleNameField = '#roleName'
    startDateField = '#startDate'
    endDateField = '#endDate'
    stillCurrentWorkHereCheckBox = '.ant-checkbox-input'

    companyName = 'Abc'
    addText = 'Add'
    addCompanyName = 'Add `Abc`'

    companyIndustry = 'Entertainment'
    addCompanyIndustry = 'Add `Entertainment`'

    roleLevel = 'Associate / Officer'

    addRoleName = 'Program Officer'

    //Academic
    institutionNameField = '#institution'
    gelarField = '.ant-select-selection-item'
    majorField = '#major'
    startDateAcademicField = '#startDate'
    endDateAcademicField = '#endDate'

    institutionName = 'Universitas Indonesia'
    addInstitutionName = 'Add `Universitas Indonesia`'

    //Bio
    bioAboutMeTextArea = '#aboutMe'
    skipButton = '.space-y-1 > .font-bold'

    //TnC
    checklistTnC = '.ant-checkbox-input'

    //Create Password
    passwordField = '#password'
    confirmPasswordField = '#confirmPassword'
    privacyPolicyCheckBox = '#checkPrivacyPolicy'
    finishButton = '#mentoring-onboarding-finish-btn'

    //Modal after register as mentor
    modalBody = '.ant-modal-body'
}