import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { NotificationPortal } from '../notification-portal/NotificationPortal';
import { ENotificationPosition } from '@src/lib/types/TypeBase';
import { TBaseNotificationToast } from '../base-notification-toast/BaseNotificationToast';

export type TypeNotification = {
    id: number;
    count: number;
} & TypeOptions;

type TypeToastBase = {
    type: 'base';
} & TBaseNotificationToast.Main;

type TypeToastCustom<T = React.HTMLAttributes<HTMLDivElement>> = {
    type: 'custom';
} & T &
    React.HTMLAttributes<HTMLDivElement>;

type TypeOptions = {
    duration?: number;
    position?: ENotificationPosition;
    isSingle?: boolean;
    message?: string;
    onClose?: (id: string, position: ENotificationPosition) => void;
} & (TypeToastBase | TypeToastCustom);

export type TypeNotificationContext = {
    showAlert: (message: TypeOptions) => void;
};

interface NotificationProviderProps {
    children: ReactNode;
}
const NotificationContext = createContext<TypeNotificationContext>({
    showAlert: () => {},
});
export const NotificationProvider = ({ children }: NotificationProviderProps) => {
    const [notificationsByPosition, setNotificationsByPosition] = useState<
        Partial<Record<ENotificationPosition, TypeNotification[]>>
    >({});

    const onCloseHandler = (id: string, position: ENotificationPosition) => {
        setNotificationsByPosition((prev) => {
            const currentNotifications = prev[position] || [];
            return {
                ...prev,
                [position]: currentNotifications.filter((notification) => notification.id !== id),
            };
        });
    };

    const showAlert = useCallback(
        ({
            duration,
            position = ENotificationPosition.BOTTOM_RIGHT,
            onClose,
            title,
            message,
            ...options
        }: TypeOptions) => {
            const id = options.id ?? Date.now().toString();

            setNotificationsByPosition((prev) => {
                const currentNotifications = prev[position] || [];

                const existingNotification = currentNotifications.find(
                    (notification) => notification.title === title && notification.message === message
                );

                if (existingNotification) {
                    return {
                        ...prev,
                        [position]: currentNotifications.map((notification) =>
                            notification.id === existingNotification.id
                                ? { ...notification, count: (notification.count || 1) + 1 }
                                : notification
                        ),
                    };
                }

                return {
                    ...prev,
                    [position]: [
                        ...currentNotifications,
                        { id, title, message, count: 1, onClose: onClose ?? onCloseHandler, ...options },
                    ],
                };
            });

            setTimeout(() => {
                setNotificationsByPosition((prev) => {
                    const currentNotifications = prev[position] || [];
                    return {
                        ...prev,
                        [position]: currentNotifications.filter((notification) => notification.id !== id),
                    };
                });
            }, duration ?? 4000);
        },
        []
    );

    const contextValue: TypeNotificationContext = {
        //values
        //methods
        showAlert,
    };
    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
            {Object.entries(notificationsByPosition).map(([position, notifications]) => (
                <NotificationPortal
                    key={position}
                    notifications={notifications}
                    position={position as ENotificationPosition}
                />
            ))}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = (): TypeNotificationContext => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotificationContext must be used within a NotificationProvider');
    }
    return context;
};
