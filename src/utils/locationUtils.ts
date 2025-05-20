import { useHead } from '@unhead/vue';

type ModuleTitle =
  | 'Light'
  | 'Spectra'
  | 'Color'
  | 'Temperature'
  | 'Composition'
  | 'Fishtank'
  | 'Exoplanets'
  | 'Museum';

export const useSpecLabHead = (
  pageTitle: string,
  moduleTitle?: ModuleTitle,
): void => {
  const fullPageTitle = moduleTitle
    ? `${moduleTitle}: ${pageTitle}`
    : pageTitle;
  useHead({ title: `${fullPageTitle} | Spectrum Lab` });
};
