// src/ai/flows/suggest-blog-topics.ts
'use server';
/**
 * @fileOverview A blog post topic suggestion AI agent.
 *
 * - suggestBlogTopics - A function that suggests blog topics related to transportation and car rentals in Morocco.
 * - SuggestBlogTopicsInput - The input type for the suggestBlogTopics function.
 * - SuggestBlogTopicsOutput - The return type for the suggestBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBlogTopicsInputSchema = z.object({
  keywords: z
    .string()
    .default('transportation, car rentals, Morocco')
    .describe('Keywords to guide topic generation.'),
});
export type SuggestBlogTopicsInput = z.infer<typeof SuggestBlogTopicsInputSchema>;

const SuggestBlogTopicsOutputSchema = z.object({
  topics: z
    .array(z.string())
    .describe('An array of suggested blog post topics.'),
});
export type SuggestBlogTopicsOutput = z.infer<typeof SuggestBlogTopicsOutputSchema>;

export async function suggestBlogTopics(input: SuggestBlogTopicsInput): Promise<SuggestBlogTopicsOutput> {
  return suggestBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogTopicsPrompt',
  input: {schema: SuggestBlogTopicsInputSchema},
  output: {schema: SuggestBlogTopicsOutputSchema},
  prompt: `You are a blog content creator specializing in transportation and tourism in Morocco.

  Based on the following keywords, suggest 5 blog post topics that would be engaging for readers interested in car rentals and transportation in Morocco:

  Keywords: {{{keywords}}}

  Format the output as a JSON array of strings.`, // Ensuring output is a JSON array of strings
});

const suggestBlogTopicsFlow = ai.defineFlow(
  {
    name: 'suggestBlogTopicsFlow',
    inputSchema: SuggestBlogTopicsInputSchema,
    outputSchema: SuggestBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
