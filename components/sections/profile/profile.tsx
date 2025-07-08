'use client';
import styles from './profile.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { noTextTranslationGlitchEffect, useI18nContext } from '@/components/i18n/i18n-provider';
import { LuExternalLink } from 'react-icons/lu';

export default function Profile() {
  const { i18n } = useI18nContext();
  const [scrollForMoreVisible, setScrollForMoreVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector(`.${styles.borderGradient}`) as HTMLElement | null;
    if (!element) return;
    let angle = 0;
    let lastUpdate = 0;
    const rotateGradient = (timestamp: number) => {
      if (timestamp - lastUpdate > 10) {
        // Update every 10 deg (performance optimization)
        angle = (angle + 1) % 360;
        element.style.setProperty('--gradient-angle', `${angle}deg`);
        lastUpdate = timestamp;
      }
      requestAnimationFrame(rotateGradient);
    };
    requestAnimationFrame(rotateGradient);

    const handleScroll = () => {
      // Updating "scroll for more"
      if (window.scrollY > 100) {
        setScrollForMoreVisible(true);
      } else {
        setScrollForMoreVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        id="profile"
        className="flex flex-col items-center px-4 pt-4 pb-10 md:p-0 md:min-h-screen md:justify-center"
      >
        <div
          className={`relative flex flex-col md:flex-row items-center md:items-start p-5 pb-10 shadow-2xl rounded-4xl ${styles.borderGradient}`}
        >
          {/* Image Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
            {/* Left Section: Image, Name, Title */}
            <div
              id={noTextTranslationGlitchEffect}
              className="flex flex-col items-center md:items-center
                    md:justify-center text-center md:text-left mb-3 md:mb-0"
            >
              <Image
                src="/images/self.png"
                alt="Profile"
                className="w-36 h-36 shadow-xl border border-black rounded-full object-cover"
                width={36}
                height={36}
              />
              <h1 className="mt-4 text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                SUSTAC André
              </h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-400">{i18n.profileJob}</h2>
            </div>

            {/* Vertical Separator (Desktop Only) */}
            <div className="hidden md:block w-px bg-gray-300 h-48"></div>

            {/* Right Section: Text + Socials */}
            <div className="flex flex-col text-center md:text-left items-center md:items-start">
              <p className="text-gray-700 dark:text-gray-100 leading-relaxed max-w-lg">
                {i18n.profileDescription}
                <br />
              </p>
              <ul className="text-gray-700 dark:text-gray-100 leading-relaxed max-w-lg mt-2">
                <li>💼 {i18n.profileCurrentJob}</li>
                <li>
                  💎 {i18n.profileCurrentProject}{' '}
                  <Link
                    href="https://crypt-hub.com/"
                    target="_blank"
                    rel="noopener"
                    className="link"
                  >
                    <span className="inline-flex items-center">
                      Crypt-Hub.com <LuExternalLink size={10} />
                    </span>
                  </Link>
                </li>
                <li>🧠 {i18n.profileSoftSkill1}</li>
                <li>🛠️ {i18n.profileSoftSkill2}</li>
                <li>🧩 {i18n.profileSoftSkill3}</li>
              </ul>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div
                  className="mx-auto w-fit border border-b-0
                                   rounded-t-lg border-gray-300 dark:border-gray-500
                                   px-4 py-1 flex space-x-3"
                >
                  <Link
                    href="https://github.com/Andross96"
                    rel="noopener"
                    target="_blank"
                    className={styles.social}
                  >
                    <FaGithub size={24} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/andross96/"
                    rel="noopener"
                    target="_blank"
                    className={styles.social}
                  >
                    <FaLinkedin size={24} />
                  </Link>
                  <Link
                    href="https://x.com/SustacAndre"
                    rel="noopener"
                    target="_blank"
                    className={styles.social}
                  >
                    <FaXTwitter size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={` transition-opacity duration-500 ${
            scrollForMoreVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
            <span className="text-sm">{i18n.scrollForMore}</span>
            <FaChevronDown size={20} className="bottom-2 animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
}
