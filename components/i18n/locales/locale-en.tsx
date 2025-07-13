import { Translations } from '@/components/i18n/locales/translations';

export class LocaleEn implements Translations {
  languageInitials = 'EN';
  languageName = 'English';

  // Navbar (dynamically used)
  navbarProfile = 'Profile';
  navbarProjects = 'Projects';
  navbarSkills = 'Skills';
  navbarContact = 'Contact';

  // Profile section
  profileJob = 'Software Engineer';
  profileDescription =
    'A passionate, self-driven and creative software engineer with experience building applications across diverse technologies—since the age of 13, and continually evolving.';
  profileCurrentJob = 'Software Engineer at BNP Paribas';
  profileCurrentProject = 'Developing ';
  profileSoftSkill1 = 'Self-taught & continuously learning';
  profileSoftSkill2 = 'Versatile & full-stack mindset';
  profileSoftSkill3 = 'Adaptable to any tech or challenge';
  scrollForMore = 'Scroll for more';

  // Projects section
  projectsTitle = 'Projects';
  projectsProfessional = 'Professional';
  projectsPlayground = 'Playground';
  projectsCryptHubDescription =
    'Crypt-Hub is a platform offering multiple blockchain-based applications. Easily sign, encrypt, or verify data and files across multiple blockchains.';
  projectsCryptHubSkillCryptography = 'Cryptography';
  projectsCryptHubSkillBlockchain = 'Blockchain';
  projectsCryptHubSkillSecurity = 'Security';
  projectsBanItemDescription =
    'A lightweight yet powerful Java plugin for Minecraft servers, built on the Bukkit API. BanItem uses an extensive configuration system to block specific items and actions.';
  projectsBanItemDownloads = 'downloads';

  // Skills section (categories are dynamically used)
  skillsTitle = 'Skills';
  skillsAdvanced = 'Advanced';
  skillsProficient = 'Proficient';
  skillsFamiliar = 'Familiar';
  skillsFrontend = 'Frontend';
  skillsBackend = 'Backend';
  skillsSecurity = 'Security';
  skillsDevOps = 'DevOps';
  skillsMobileApp = 'Mobile App';
  skillsDesktopApp = 'Desktop App';
  skillsTools = 'Tools';

  // Contact section
  contactTitle = 'Contact';
  contactDescription = 'Feel free to reach out via this form or through my social media.';
  contactEmail = 'Email';
  contactEmailCanNotBeEmpty = "Email can't be empty.";
  contactEmailInvalid = 'Email is invalid.';
  contactSubject = 'Subject';
  contactSubjectCanNotBeEmpty = "Subject can't be empty.";
  contactMessage = 'Message';
  contactMessageCanNotBeEmpty = "Message can't be empty.";
  contactSendMessage = 'Send message';
  contactMessageSending = 'Sending...';
  contactMessageSent = 'Message sent ! I will get back to you as soon as possible.';
  contactMessageSendFailed = 'Failed to send message. Please try again.';
  contactMessageSendError = 'Error while sending message. Please try again.';
  contactRecaptchaNotReady = 'Recaptcha not ready. Please try again.';

  // Footer section
  footerCopyright = 'All rights reserved.';
  footerRecaptcha =
    'This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfService} apply.';
  footerRecaptchaPrivacyPolicy = 'Privacy Policy';
  footerRecaptchaTermsOfService = 'Terms of Service';
  footerOpenSource = 'This website is open source on ';
}
