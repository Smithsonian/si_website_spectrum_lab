import { defineStore } from 'pinia';
import metadataJson from './metadata.json' with { type: 'json' };

interface SpectrumMetadata {
  category: string;
  filename: string;
  title: string;
  spectrumType: string;
  imageName: string;
  imageLink: string;
  creditName: string;
  creditLink: string;
  howTaken: string;
  notes: string;
}

export const useMetadataStore = defineStore('metadata', {
  state: () => ({ allMetadata: [] as SpectrumMetadata[] }),
  actions: {
    initialize() {
      this.allMetadata = metadataJson;
    },
  },
});
