import React from 'react';

const Alert = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="alert alert-error rounded-none w-full md:w-full">
        <div className="flex flex-col md:flex-row items-center">
          <span className="text-sm md:text-base">Elección Incorrecta!. Intenta de nuevo</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
