'use client';

import { useState } from 'react';
import { useI18nContext } from '@/components/i18n/i18n-provider';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import FloatingInput from '@/components/sections/contact/floatinginput';
import { CiMail } from 'react-icons/ci';
import Link from 'next/link';
import styles from './contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const { i18n } = useI18nContext();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field: string, value: string) => {
    let error = '';

    if (field === 'email') {
      if (!value) error = i18n.contactEmailCanNotBeEmpty;
      else if (!emailRegex.test(value)) error = i18n.contactEmailInvalid;
    }

    if (field === 'subject') {
      if (!value) error = i18n.contactSubjectCanNotBeEmpty;
    }

    if (field === 'message') {
      if (!value) error = i18n.contactMessageCanNotBeEmpty;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return error === '';
  };

  const isFormValid =
    email.trim() !== '' &&
    subject.trim() !== '' &&
    message.trim() !== '' &&
    !errors.email &&
    !errors.subject &&
    !errors.message;

  const [isSendingMail, setIsSendingMail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateField('email', email);
    if (!isEmailValid) return;
    const isSubjectValid = validateField('subject', subject);
    if (!isSubjectValid) return;
    const isMessageValid = validateField('message', message);
    if (!isMessageValid) return;

    if (!executeRecaptcha) {
      alert(i18n.contactRecaptchaNotReady);
      return;
    }

    setIsSendingMail(true);

    try {
      const token = await executeRecaptcha('contact_form');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          subject,
          message,
          token,
        }),
      });

      if (res.ok) {
        alert(i18n.contactMessageSent);
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({ email: '', subject: '', message: '' });
      } else {
        alert(i18n.contactMessageSendFailed);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      alert(i18n.contactMessageSendError);
    } finally {
      setIsSendingMail(false);
    }
  };

  const loadingIco = (
    <svg
      className="animate-spin w-5 h-5 align-middle"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );

  return (
    <section
      id="contact"
      className="relative px-4 pb-10 md:min-h-screen md:px-12 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-3xl flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold text-center mb-3">{i18n.contactTitle}</h2>

        <span className="text-gray-600 dark:text-gray-400 text-center mb-2">
          {i18n.contactDescription}
        </span>

        <div className="mb-6 flex space-x-3">
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

        <div className="w-full content md:w-2/4 rounded-2xl p-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <FloatingInput
              id="email"
              name="email"
              label={i18n.contactEmail}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField('email', e.target.value);
              }}
              error={errors.email}
            />

            <FloatingInput
              id="subject"
              name="subject"
              label={i18n.contactSubject}
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                validateField('subject', e.target.value);
              }}
              error={errors.subject}
            />

            <FloatingInput
              id="message"
              name="message"
              label={i18n.contactMessage}
              isTextarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                validateField('message', e.target.value);
              }}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={!isFormValid || isSendingMail}
              className={`mx-auto px-4 py-2 rounded-md border text-sm font-semibold flex items-center gap-2
            bg-gray-50 text-black dark:bg-gray-900 dark:text-white
            ${
              isFormValid && !isSendingMail
                ? 'cursor-pointer item-shadow shadow-md hover:shadow-lg transition-all duration-500'
                : 'cursor-not-allowed opacity-50'
            }`}
            >
              <span className="flex items-center gap-2">
                {isSendingMail ? (
                  <>
                    {loadingIco}
                    <span className="leading-none">{i18n.contactMessageSending}</span>
                  </>
                ) : (
                  <>
                    <CiMail className="w-5 h-5 align-middle" />
                    <span className="leading-none">{i18n.contactSendMessage}</span>
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
