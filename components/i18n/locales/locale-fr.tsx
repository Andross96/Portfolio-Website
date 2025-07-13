import { Translations } from '@/components/i18n/locales/translations';

export class LocaleFr implements Translations {
  languageInitials = 'FR';
  languageName = 'Français';

  // Navbar (dynamically used)
  navbarProfile = 'Profil';
  navbarProjects = 'Projets';
  navbarSkills = 'Compétences';
  navbarContact = 'Contact';

  // Profile section
  profileJob = 'Ingénieur logiciel';
  profileDescription =
    "Ingénieur logiciel passionné, autonome et créatif, avec de l'expérience dans la création d'applications sur des technologies variées — depuis l’âge de 13 ans, et en constante évolution.";
  profileCurrentJob = 'Ingénieur logiciel chez BNP Paribas';
  profileCurrentProject = 'Développement de ';
  profileSoftSkill1 = 'Autodidacte et en apprentissage constant';
  profileSoftSkill2 = 'Polyvalent avec une vision full-stack';
  profileSoftSkill3 = 'Capable de m’adapter à toute technologie ou défi';
  scrollForMore = 'Faites défiler pour en savoir plus';

  // Projects section
  projectsTitle = 'Projets';
  projectsProfessional = 'Professionnel';
  projectsPlayground = 'Bac a sable';
  projectsCryptHubDescription =
    'Crypt-Hub est une plateforme proposant plusieurs applications basées sur la blockchain. Signez, chiffrez ou vérifiez facilement des données et des fichiers sur plusieurs blockchains.';
  projectsCryptHubSkillCryptography = 'Cryptographie';
  projectsCryptHubSkillBlockchain = 'Blockchain';
  projectsCryptHubSkillSecurity = 'Securité';
  projectsBanItemDescription =
    'Un plugin Java léger mais puissant pour les serveurs Minecraft, conçu avec l’API Bukkit. BanItem utilise des configurations avancé pour bloquer des objets ou actions spécifiques.';
  projectsBanItemDownloads = 'téléchargements';

  // Skills section (categories are dynamically used)
  skillsTitle = 'Compétences';
  skillsAdvanced = 'Avancé';
  skillsProficient = 'Maîtrise';
  skillsFamiliar = 'Notions';
  skillsFrontend = 'Frontend';
  skillsBackend = 'Backend';
  skillsSecurity = 'Securité';
  skillsDevOps = 'DevOps';
  skillsMobileApp = 'App mobile';
  skillsDesktopApp = 'App de bureau';
  skillsTools = 'Outils';

  // Contact section
  contactTitle = 'Contact';
  contactDescription = "N'hésitez pas à me contacter via ce formulaire ou via mes réseaux sociaux.";
  contactEmail = 'Email';
  contactEmailCanNotBeEmpty = "L'email ne peut pas être vide.";
  contactEmailInvalid = "L'email est invalide.";
  contactSubject = 'Sujet';
  contactSubjectCanNotBeEmpty = 'Le sujet ne peut pas être vide.';
  contactMessage = 'Message';
  contactMessageCanNotBeEmpty = 'Le message ne peut pas être vide.';
  contactSendMessage = 'Envoyer le message';
  contactMessageSending = 'Envoi en cours...';
  contactMessageSent = 'Message envoyé ! Je reviendrai vers vous dès que possible.';
  contactMessageSendFailed = "L'envoi du message a échoué. Veuillez réessayer.";
  contactMessageSendError = "Erreur lors de l'envoi du message. Veuillez réessayer.";
  contactRecaptchaNotReady = "Recaptcha n'est pas prêt. Veuillez réessayer.";

  // Footer section
  footerCopyright = 'Tous droits réservés.';
  footerRecaptcha =
    "Ce site est protégé par reCAPTCHA, la {privacyPolicy} et les {termsOfService} de Google s'appliquent.";
  footerRecaptchaPrivacyPolicy = 'Politique de confidentialité';
  footerRecaptchaTermsOfService = "Conditions d'utilisation";
  footerOpenSource = 'Ce site est open source sur ';
}
