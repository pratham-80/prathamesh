"use client";

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observerInstance = new IntersectionObserver(updateEntry, observerParams);

    observer.current = observerInstance;
    observerInstance.observe(node);

    return () => observerInstance.disconnect();
  }, [node, threshold, root, rootMargin, frozen]);

  const prevNode = useRef<Element | null>(null);

  useEffect(() => {
    if (prevNode.current && node !== prevNode.current) {
      observer.current?.disconnect();
    }
    prevNode.current = node;
  }, [node]);

  return [setNode, entry] as const;
}
