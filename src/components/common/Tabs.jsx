import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full max-w-2xl mx-auto">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return (
    <div className="flex gap-2 border-b-2 border-gray-200 mb-6">
      {children}
    </div>
  );
};

Tabs.Tab = function Tab({ children, value }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`
        px-6 py-3 text-base font-medium transition-all duration-300
        border-b-3 -mb-0.5
        ${isActive
          ? 'text-blue-600 border-blue-600 font-semibold'
          : 'text-gray-600 border-transparent hover:text-gray-900'
        }
      `}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ children, value }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return (
    <div className="p-6 animate-fadeIn">
      {children}
    </div>
  );
};

export default Tabs;

