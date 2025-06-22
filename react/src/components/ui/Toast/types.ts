import { VariantProps } from 'class-variance-authority';
import { Toast } from './Toast';

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export type ToastActionElement = React.ReactElement<React.ComponentPropsWithoutRef<typeof Toast>>;