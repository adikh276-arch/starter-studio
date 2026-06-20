"use client";
/**
 * Marker function for i18next-parser to find strings in data files.
 * This function just returns the key as is.
 */
export const t = (key: string, defaultValue?: string) => key;
