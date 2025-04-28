import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer blue lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Елисеева Варвара
        </div>
      </div>
    </footer>
  );
}