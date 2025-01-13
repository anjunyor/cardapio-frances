import React, { ReactNode } from 'react';

interface MenuSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, icon, children }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-center mb-8">
        <div className="h-px bg-gray-300 flex-grow"></div>
        <div className="flex items-center mx-4">
          {icon}
          <h2 className="font-serif text-2xl md:text-3xl ml-2">{title}</h2>
        </div>
        <div className="h-px bg-gray-300 flex-grow"></div>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
};

export default MenuSection;