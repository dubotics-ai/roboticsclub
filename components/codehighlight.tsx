import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import styles from '../components/codehighlight.module.css'

export const CodeHighlight = ({ code, language, cid }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    if(!copied) {
      setCopied(true)
      navigator.clipboard.writeText(code)
      setTimeout(() => {
        setCopied(false)
      }, 2000);
    }
    
  }
  useEffect(() => {
    const codeElement = document.getElementById(cid);
    if (codeElement) {
      delete codeElement.dataset.highlighted;
      hljs.highlightElement(codeElement);
    } else {
      hljs.highlightAll();
    }
  }, [code, language]);

  return (
    <div className={styles.container}>
        <button onClick={handleCopyClick} className={styles.copy} title="Copy code">
        {
          copied? (<svg viewBox="0 0 20 20" width="1em" height="1em" fill="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>): (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"><rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>)
        }
        </button>
    <pre>
      <code className={`${language}`} id={cid}>
        {code}
      </code>
    </pre>
    </div>
  );
};

export default function CodeTabs({codeSamples, cid}) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    Object.keys(codeSamples)[0]
  );

  const handleTabClick = (language: any) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <div>
        {Object.keys(codeSamples).map((language) => (
          <button
            key={language}
            onClick={() => handleTabClick(language)}
            className={selectedLanguage === language ? styles.tab_btn_active : styles.tab_btn}
          >
            {language}
          </button>
        ))}
      </div>
      <CodeHighlight
        code={codeSamples[selectedLanguage]}
        language={selectedLanguage}
        cid={cid}
      />
    </div>
  );
};
