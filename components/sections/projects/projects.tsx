import { noTextTranslationGlitchEffect, useI18nContext } from '@/components/i18n/i18n-provider';
import Image from 'next/image';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

export default function Projects() {
  const { i18n } = useI18nContext();

  return (
    // Replace pb-12 with min-h-screen whenever projects will be listed
    <section id="projects" className="relative px-4 md:px-12 mx-auto pb-20 max-w-5xl">
      <h2 className="text-3xl font-bold text-center mb-3">{i18n.projectsTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Crypt-Hub */}
        <div className="relative rounded-xl shadow-lg border p-6 hover:shadow-xl transition content">
          <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none">
            <div className="bg-blue-700 text-white text-[10px] font-bold text-center rotate-[-45deg] w-[140%] absolute top-6 left-[-30%] shadow-md">
              {i18n.projectsProfessional}
            </div>
          </div>

          <div className="flex items-center justify-center mb-4 gap-2">
            <Image
              src="/images/crypt-hub.png"
              alt="Crypt-Hub Logo"
              width={32}
              height={32}
              className="dark:invert relative top-[2px]"
            />
            <Link
              id={noTextTranslationGlitchEffect}
              href="https://crypt-hub.com"
              target="_blank"
              rel="noopener"
              className="text-2xl font-bold text-yellow-500 inline-flex items-center gap-1 link"
            >
              Crypt-Hub <LuExternalLink size={14} />
            </Link>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {i18n.projectsCryptHubDescription}
          </p>

          <div className="flex flex-wrap items-center gap-2 whitespace-nowrap">
            <span className="text-xs border px-2 py-1 rounded-full">
              {i18n.projectsCryptHubSkillCryptography}
            </span>
            <span className="text-xs border px-2 py-1 rounded-full">
              {i18n.projectsCryptHubSkillBlockchain}
            </span>
            <span className="text-xs border px-2 py-1 rounded-full">
              {i18n.projectsCryptHubSkillSecurity}
            </span>
          </div>
        </div>

        {/* BanItem */}
        <div className="relative rounded-xl shadow-lg border p-6 hover:shadow-xl transition content">
          <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none">
            <div className="bg-green-600 text-white text-[10px] font-bold text-center rotate-[-45deg] w-[140%] absolute top-6 left-[-30%] shadow-md">
              {i18n.projectsPlayground}
            </div>
          </div>
          <div
            className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold
            px-3 py-1 rounded-tr-xl rounded-bl-md shadow border-l border-b
          border-black dark:border-white dark:text-black"
          >
            90k+ {i18n.projectsBanItemDownloads}
          </div>

          <div className="flex justify-center mb-4 gap-2">
            <Image
              src="/images/banitem.png"
              alt="BanItem Logo"
              width={32}
              height={32}
              className="relative top-[2px]"
            />
            <Link
              id={noTextTranslationGlitchEffect}
              href="https://www.spigotmc.org/resources/banitem-1-7.67701/"
              target="_blank"
              rel="noopener"
              className="text-2xl font-bold text-yellow-500 inline-flex items-center gap-1 link"
            >
              BanItem <LuExternalLink size={14} />
            </Link>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {i18n.projectsBanItemDescription}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs border px-2 py-1 rounded-full">Java</span>
            <span className="text-xs border px-2 py-1 rounded-full">Maven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
