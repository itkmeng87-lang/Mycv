import React from 'react';

export default function Footer({ currentLang }) {
  // ១. រៀបចំខ្លឹមសារអក្សរនៅក្នុង Footer ជា ២ ភាសា
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
      {/* ព័ត៌មានរក្សាសិទ្ធិ */}
      <p className="text-slate-500 text-xs sm:text-sm">
        &copy; {currentYear}  {content.rights}
      </p>
    </footer>
  );
}