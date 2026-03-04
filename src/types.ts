
// Add React import to resolve namespace issues for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TrainingSession {
  day: string;
  time: string;
  title: string;
  duration: string;
  isHighlight?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}