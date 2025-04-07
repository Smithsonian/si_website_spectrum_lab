import { useHead } from '@unhead/vue';

type ModuleTitle =
  | 'Color'
  | 'Spectra'
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
