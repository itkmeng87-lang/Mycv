import React from 'react';

export default function Footer({ currentLang }) {
  const translations = {
    EN: {
      rights: " Vun Khemra. All rights reserved.",
      
    },
    KH: {
      rights: " វុន​​ ខេមរ៉ា. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    }
  };
  const content = translations[currentLang] || translations.EN;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-900/60 text-center space-y-2">
      <p className="text-slate-500 text-xs sm:text-sm">
        &copy; {currentYear}  {content.rights}
      </p>
    </footer>
  );
}