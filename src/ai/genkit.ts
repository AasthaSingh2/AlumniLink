import {configureGenkit} from '@genkit-ai/core';
import {googleAI} from '@genkit-ai/googleai';

export const ai = configureGenkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
