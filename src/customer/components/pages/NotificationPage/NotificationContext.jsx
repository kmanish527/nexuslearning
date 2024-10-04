import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Example notifications data, you can replace this with actual data fetching logic
  const initialNotifications = [
    { id: 1, message: "50% off on all web development courses!" },
    { id: 2, message: "New Python for Beginners course just launched!" },
    { id: 3, message: "Enroll in any course and get an additional course free!" },
  ];

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // Populate notifications on initial render
  React.useEffect(() => {
    setNotifications(initialNotifications);
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
