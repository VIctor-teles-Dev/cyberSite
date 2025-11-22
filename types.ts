import React from 'react';

export interface ChatMessage {
    role: 'user' | 'model' | 'system';
    text: string;
    timestamp: string;
}

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: 'green' | 'pink' | 'blue';
}