export abstract class Translations {
  abstract languageInitials: string;
  abstract languageName: string;

  // Navbar (dynamically used)
  abstract navbarProfile: string;
  abstract navbarProjects: string;
  abstract navbarSkills: string;
  abstract navbarContact: string;

  // Profile section
  abstract profileJob: string;
  abstract profileDescription: string;
  abstract profileCurrentJob: string;
  abstract profileCurrentProject: string;
  abstract profileSoftSkill1: string;
  abstract profileSoftSkill2: string;
  abstract profileSoftSkill3: string;
  abstract scrollForMore: string;

  // Projects section
  abstract projectsTitle: string;
  abstract projectsProfessional: string;
  abstract projectsPlayground: string;
  abstract projectsCryptHubDescription: string;
  abstract projectsCryptHubSkillCryptography: string;
  abstract projectsCryptHubSkillBlockchain: string;
  abstract projectsCryptHubSkillSecurity: string;
  abstract projectsBanItemDescription: string;
  abstract projectsBanItemDownloads: string;

  // Skills section (categories are dynamically used)
  abstract skillsTitle: string;
  abstract skillsAdvanced: string;
  abstract skillsProficient: string;
  abstract skillsFamiliar: string;
  abstract skillsFrontend: string;
  abstract skillsBackend: string;
  abstract skillsSecurity: string;
  abstract skillsDevOps: string;
  abstract skillsMobileApp: string;
  abstract skillsDesktopApp: string;
  abstract skillsTools: string;

  // Contact section
  abstract contactTitle: string;
  abstract contactDescription: string;
  abstract contactEmail: string;
  abstract contactEmailCanNotBeEmpty: string;
  abstract contactEmailInvalid: string;
  abstract contactSubject: string;
  abstract contactSubjectCanNotBeEmpty: string;
  abstract contactMessage: string;
  abstract contactMessageCanNotBeEmpty: string;
  abstract contactSendMessage: string;
  abstract contactMessageSending: string;
  abstract contactMessageSent: string;
  abstract contactMessageSendFailed: string;
  abstract contactMessageSendError: string;
  abstract contactRecaptchaNotReady: string;

  // Footer section
  abstract footerCopyright: string;
  abstract footerRecaptcha: string;
  abstract footerRecaptchaPrivacyPolicy: string;
  abstract footerRecaptchaTermsOfService: string;
  abstract footerOpenSource: string;
}
