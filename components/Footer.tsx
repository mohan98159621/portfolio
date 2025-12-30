import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;