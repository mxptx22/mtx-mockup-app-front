import { Page } from '../types/pages';

export const PagesMap = new Map<string, Page>([
  ['home', { name: 'Home', icon: 'home', path: 'home' }],
  ['my-health', { name: 'My Health', icon: 'heart', path: 'my-health' }],
  ['messages', { name: 'Messages', icon: 'message', path: 'messages' }],
]);

export const MyHealthPagesMap = {
  personalRecord: {
    name: 'Personal Record',
    icon: 'home',
    path: 'personal-record',
  },
  prescriptions: {
    name: 'Prescriptions',
    icon: 'heart',
    path: 'prescriptions',
  },
  testResults: {
    name: 'Test Results',
    icon: 'message',
    path: 'test-results',
  },
};
