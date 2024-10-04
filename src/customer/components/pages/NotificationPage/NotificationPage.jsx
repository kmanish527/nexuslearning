import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

const NotificationPage = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-4">
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500">No more notifications to display</p>
        ) : (
          notifications.map((notification) => (
            <div key={notification.id} className="flex justify-between items-center p-2 border-b border-gray-200">
              <p className="text-gray-800">{notification.message}</p>
              <button onClick={() => removeNotification(notification.id)} aria-label="Remove notification">
                <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-red-600" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
