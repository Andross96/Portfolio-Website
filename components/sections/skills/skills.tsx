import { JSX, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './skills.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LuCloud, LuPanelsTopLeft, LuServer } from 'react-icons/lu';
import { GoPasskeyFill } from 'react-icons/go';
import { CiDesktop, CiMobile1 } from 'react-icons/ci';
import { LiaToolsSolid } from 'react-icons/lia';
import { noTextTranslationGlitchEffect, useI18nContext } from '@/components/i18n/i18n-provider';

type SkillLevel = 'advanced' | 'proficient' | 'familiar';

const skillLevelStyles: Record<SkillLevel, string> = {
  advanced: 'bg-yellow-300 dark:bg-yellow-500 text-yellow-900 dark:text-black',
  proficient: 'bg-blue-300 dark:bg-blue-600 text-blue-900 dark:text-white',
  familiar: 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white',
};

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillCategory = {
  category: string;
  icon: JSX.Element;
  skills: Skill[];
};

const skillGroups: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: <LuPanelsTopLeft />,
    skills: [
      { name: 'HTML5', level: 'proficient' },
      { name: 'TailwindCSS', level: 'proficient' },
      { name: 'Javascript', level: 'proficient' },
      { name: 'Next.js', level: 'proficient' },
      { name: 'CSS3', level: 'familiar' },
      { name: 'Bootstrap', level: 'familiar' },
      { name: 'Angular', level: 'familiar' },
    ],
  },
  {
    category: 'Backend',
    icon: <LuServer />,
    skills: [
      { name: 'Java', level: 'advanced' },
      { name: 'Maven', level: 'advanced' },
      { name: 'Spring', level: 'advanced' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'MySQL', level: 'proficient' },
      { name: 'SQLite', level: 'proficient' },
      { name: 'OpenAPI', level: 'proficient' },
      { name: 'PHP', level: 'familiar' },
      { name: 'Symfony', level: 'familiar' },
      { name: 'MongoDB', level: 'familiar' },
      { name: 'Redis', level: 'familiar' },
    ],
  },
  {
    category: 'Security',
    icon: <GoPasskeyFill />,
    skills: [
      { name: 'OAuth2', level: 'advanced' },
      { name: 'OpenID', level: 'advanced' },
      { name: 'Encryption', level: 'advanced' },
      { name: 'Hashing', level: 'advanced' },
      { name: 'Signature', level: 'advanced' },
      { name: 'Certificates', level: 'advanced' },
      { name: 'TLS', level: 'advanced' },
      { name: 'SAML', level: 'advanced' },
      { name: 'JWT', level: 'advanced' },
      { name: 'Blockchain', level: 'proficient' },
    ],
  },
  {
    category: 'DevOps',
    icon: <LuCloud />,
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'Gitlab', level: 'advanced' },
      { name: 'Nginx', level: 'proficient' },
      { name: 'AWS', level: 'proficient' },
      { name: 'Kubernetes', level: 'proficient' },
      { name: 'Docker', level: 'familiar' },
      { name: 'Apache', level: 'familiar' },
      { name: 'Prometheus', level: 'familiar' },
      { name: 'Grafana', level: 'familiar' },
      { name: 'Harbor', level: 'familiar' },
    ],
  },
  {
    category: 'MobileApp',
    icon: <CiMobile1 />,
    skills: [
      { name: 'Flutter', level: 'proficient' },
      { name: 'Dart', level: 'proficient' },
      { name: 'Android Studio', level: 'familiar' },
    ],
  },
  {
    category: 'DesktopApp',
    icon: <CiDesktop />,
    skills: [
      { name: 'C#', level: 'familiar' },
      { name: 'VB.NET', level: 'familiar' },
    ],
  },
  {
    category: 'Tools',
    icon: <LiaToolsSolid />,
    skills: [
      { name: 'IntelliJ', level: 'advanced' },
      { name: 'SonarQube', level: 'advanced' },
      { name: 'Fortify', level: 'advanced' },
      { name: 'NexusIQ', level: 'advanced' },
      { name: 'Jira', level: 'advanced' },
      { name: 'Confluence', level: 'advanced' },
      { name: 'Visual Studio', level: 'proficient' },
      { name: 'Bash', level: 'proficient' },
      { name: 'Postman', level: 'proficient' },
      { name: 'VS Code', level: 'familiar' },
    ],
  },
];

export default function Skills() {
  const { i18n } = useI18nContext();

  // Mobile horizontal skills categories
  const [selectedCategory, setSelectedCategory] = useState(skillGroups[0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollButtons = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    updateScrollButtons(); // initial check

    el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons); // in case of viewport resize

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  return (
    <section id="skills" className="w-full px-4 md:px-12 pb-20">
      <h2 className="text-3xl font-bold text-center mb-3">{i18n.skillsTitle}</h2>

      <div className="flex justify-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-8 h-4 rounded-full border border-black dark:border-white bg-yellow-500 dark:bg-yellow-700"></span>
          <span>{i18n.skillsAdvanced}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-4 rounded-full border border-black dark:border-white bg-blue-300 dark:bg-blue-600"></span>
          <span>{i18n.skillsProficient}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-4 rounded-full border border-black dark:border-white bg-gray-300 dark:bg-gray-500"></span>
          <span>{i18n.skillsFamiliar}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto px-4 gap-4">
        <div className="md:hidden relative -mx-4 px-4 pb-2">
          {canScrollLeft && (
            <div
              id={noTextTranslationGlitchEffect}
              className="absolute left-0 pb-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              onClick={() => scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' })}
            >
              <FaChevronLeft className="text-gray-800 dark:text-gray-300 animate-pulse" />
            </div>
          )}

          {/* Scrollable container */}
          <div ref={scrollRef} className={`overflow-x-auto ${styles.noScrollbar}`}>
            <div className="flex gap-2 w-max">
              {skillGroups.map((group) => (
                <button
                  key={group.category}
                  onClick={() => setSelectedCategory(group)}
                  className={`
                                    px-4 py-2 rounded-md border text-sm font-semibold flex items-center justify-between
                                    text-left gap-2 transition-shadow duration-500 ${styles.category}
                                    ${
                                      selectedCategory.category === group.category
                                        ? styles.selected
                                        : 'cursor-pointer'
                                    }
                                    `}
                >
                  <span className="flex items-center gap-2">
                    {group.icon && <span className="text-lg">{group.icon}</span>}
                    {
                      i18n[
                        `skills${group.category.charAt(0).toUpperCase()}${group.category.slice(1)}` as keyof typeof i18n
                      ]
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          {canScrollRight && (
            <div
              id={noTextTranslationGlitchEffect}
              className="absolute right-0 pb-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              onClick={() => scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' })}
            >
              <FaChevronRight className="text-gray-800 dark:text-gray-300 animate-pulse" />
            </div>
          )}
        </div>

        <aside className="hidden md:flex md:flex-col gap-2 flex-shrink-0 w-1/4">
          {skillGroups.map((group) => (
            <button
              key={group.category}
              onClick={() => setSelectedCategory(group)}
              className={`
                                px-4 py-2 rounded-md border text-sm font-semibold flex items-center justify-between
                                min-w-[150px] text-left gap-2 transition-shadow duration-500 ${styles.category}
                                ${
                                  selectedCategory.category === group.category
                                    ? styles.selected
                                    : 'item-shadow cursor-pointer'
                                }
                                `}
            >
              <span className="flex items-center gap-2">
                {group.icon && <span className="text-lg">{group.icon}</span>}
                {
                  i18n[
                    `skills${group.category.charAt(0).toUpperCase()}${group.category.slice(1)}` as keyof typeof i18n
                  ]
                }
              </span>

              {/* Right: Arrow only if not selected */}
              <span id={noTextTranslationGlitchEffect} className="text-base">
                &rarr;
              </span>
            </button>
          ))}
        </aside>

        <section
          className={`w-full md:w-[75%] ${styles.animateFadeIn}
    content
    rounded-2xl shadow-md p-5 pt-4`}
        >
          <h3
            key={selectedCategory.category}
            className={`transition-opacity 
                            duration-500 opacity-0 ${styles.animateFadeIn}
                            text-xl font-semibold text-gray-900 dark:text-white text-center mb-4`}
          >
            {
              i18n[
                `skills${selectedCategory.category.charAt(0).toUpperCase()}${selectedCategory.category.slice(1)}` as keyof typeof i18n
              ]
            }
          </h3>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-8 text-sm">
            {selectedCategory.skills.map((skill, index) => (
              <li
                key={`${selectedCategory.category}-${skill.name}`}
                className="flex flex-col items-center"
              >
                <Image
                  src={`/images/skills/${encodeURIComponent(skill.name.toLowerCase())}.svg`}
                  alt={skill.name}
                  className={`w-12 h-12 ${styles[`${skill.level}BoxShadow`]} dark:bg-gray-100 rounded-full transition-opacity duration-500 opacity-0 ${styles.animateFadeIn}`}
                  width={12}
                  height={12}
                  style={{ animationDelay: `${index * 50}ms` }}
                />
                <span
                  id={noTextTranslationGlitchEffect}
                  className={`transition-opacity duration-500 opacity-0 ${styles.animateFadeIn}
                                    whitespace-nowrap px-2 mt-1 py-0.5 
                                    rounded-lg font-semibold ${skillLevelStyles[skill.level]}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
