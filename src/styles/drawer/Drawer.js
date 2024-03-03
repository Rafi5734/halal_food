import React from 'react';

const Drawer = ({ isOpen, onClose, children }) => {
    const drawerClasses = isOpen ? 'translate-x-0' : 'translate-x-full';

    return (
        <div
            className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${drawerClasses} transition-transform ease-in-out`}
        >
            <button className="absolute top-2 right-2 text-white" onClick={onClose}>
                Close
            </button>
            {children}
        </div>
    );
};

export default Drawer;
