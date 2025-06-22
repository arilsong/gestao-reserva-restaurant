import styled from 'styled-components';
import * as ToastPrimitives from '@radix-ui/react-toast';

export const Container = styled(ToastPrimitives.Viewport)`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column-reverse;
  max-height: 100vh;
  width: 100%;
  padding: 16px;

  @media (min-width: 640px) {
    bottom: 0;
    right: 0;
    top: auto;
    flex-direction: column;
    max-width: 420px;
  }
`;

export const ToastRoot = styled(ToastPrimitives.Root)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 32px 24px 24px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  pointer-events: auto;
  transition: all 0.3s ease;

  &[data-swipe='cancel'] {
    transform: translateX(0);
  }

  &[data-swipe='end'] {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }

  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
    transition: none;
  }

  &[data-state='open'] {
    animation: slideIn 0.3s ease;
  }

  &[data-state='closed'] {
    animation: slideOut 0.3s ease;
    opacity: 0.8;
  }

  &[data-swipe='end'] {
    animation: slideOut 0.3s ease;
  }

  &.toast-default {
    background: white;
    color: #111827;
  }

  &.toast-destructive {
    background: #ef4444;
    color: white;
    border-color: #dc2626;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0.8;
    }
  }

  @media (min-width: 640px) {
    &[data-state='open'] {
      animation: slideInBottom 0.3s ease;
    }

    @keyframes slideInBottom {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
`;

export const ToastActionStyled = styled(ToastPrimitives.Action)`
  display: inline-flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #374151;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: #f3f4f6;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    border-color: #2563eb;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .toast-destructive & {
    border-color: rgba(255, 255, 255, 0.4);
    color: white;

    &:hover {
      background: #dc2626;
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
      border-color: #dc2626;
    }
  }
`;

export const ToastCloseStyled = styled(ToastPrimitives.Close)`
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 4px;
  border-radius: 4px;
  color: rgba(17, 24, 39, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease;
  outline: none;

  .toast-root:hover & {
    opacity: 1;
  }

  &:hover {
    color: #111827;
  }

  &:focus {
    opacity: 1;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  .toast-destructive & {
    color: #fca5a5;

    &:hover {
      color: #fef2f2;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
    }
  }

  .icon-close {
    width: 16px;
    height: 16px;
  }
`;

export const ToastTitleStyled = styled(ToastPrimitives.Title)`
  font-size: 14px;
  font-weight: 600;
  color: #111827;

  .toast-destructive & {
    color: white;
  }
`;

export const ToastDescriptionStyled = styled(ToastPrimitives.Description)`
  font-size: 14px;
  color: #4b5563;
  opacity: 0.9;

  .toast-destructive & {
    color: #f3f4f6;
  }
`;