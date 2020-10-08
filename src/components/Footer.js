import React from 'react';
const d = new Date();

export default function Footer() {
  return (
    <footer className="bg-black small text-center text-white-50">
      <div className="container">
        Copyright &copy; Mats Nilsson {d.getFullYear()}
      </div>
    </footer>
  );
}
