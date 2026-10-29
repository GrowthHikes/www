import React from 'react';

export default function SideLabel({ text, theme = 'dark' }) {
  return (
    <div className={`sl__col sl__col--${theme}`} aria-hidden="true">
      <span className="sl__line" />
      <span className="sl__text">{text}</span>
    </div>
  );
}
