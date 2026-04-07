'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating engaging
 *   flavor descriptions for menu items, aligning with the brand motto.
 *
 * - generateFlavorDescription - A function that generates a flavor description for a given menu item.
 * - GenerateFlavorDescriptionInput - The input type for the generateFlavorDescription function.
 * - GenerateFlavorDescriptionOutput - The return type for the generateFlavorDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFlavorDescriptionInputSchema = z.object({
  itemName: z.string().describe('The name of the menu item.'),
  motto: z
    .string()
    .describe('The brand motto to incorporate into the description.'),
});
export type GenerateFlavorDescriptionInput = z.infer<
  typeof GenerateFlavorDescriptionInputSchema
>;

const GenerateFlavorDescriptionOutputSchema = z.object({
  description: z.string().describe('The AI-generated flavor description.'),
});
export type GenerateFlavorDescriptionOutput = z.infer<
  typeof GenerateFlavorDescriptionOutputSchema
>;

export async function generateFlavorDescription(
  input: GenerateFlavorDescriptionInput
): Promise<GenerateFlavorDescriptionOutput> {
  return generateFlavorDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFlavorDescriptionPrompt',
  input: {schema: GenerateFlavorDescriptionInputSchema},
  output: {schema: GenerateFlavorDescriptionOutputSchema},
  prompt: `You are a creative food writer for a fast-food restaurant. Your task is to generate an engaging and evocative flavor description for a menu item.

Be creative and enticing, highlighting the unique qualities and taste experience of the item.
Incorporate the brand's motto into the description naturally.

Menu Item: {{{itemName}}}
Brand Motto: "{{{motto}}}"

Generate a description that captures the essence of the item and entices customers.`,
});

const generateFlavorDescriptionFlow = ai.defineFlow(
  {
    name: 'generateFlavorDescriptionFlow',
    inputSchema: GenerateFlavorDescriptionInputSchema,
    outputSchema: GenerateFlavorDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
