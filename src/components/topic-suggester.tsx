"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2 } from 'lucide-react';
import { suggestBlogTopics } from '@/ai/flows/suggest-blog-topics';
import type { SuggestBlogTopicsOutput } from '@/ai/flows/suggest-blog-topics';
import { useToast } from "@/hooks/use-toast";

export function TopicSuggester() {
  const [topics, setTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggestTopics = async () => {
    setIsLoading(true);
    setTopics([]);
    try {
      const result: SuggestBlogTopicsOutput = await suggestBlogTopics({
        keywords: 'transportation, car rentals, Morocco, travel tips, road trips',
      });
      if (result && result.topics) {
        setTopics(result.topics);
      } else {
        toast({
          title: "Error",
          description: "Could not fetch topic suggestions. The response was empty.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error suggesting topics:', error);
      toast({
        title: "Error",
        description: "Failed to generate topic suggestions. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Need Blog Ideas?
        </h2>
        <p className="mb-8 text-lg text-secondary-foreground max-w-2xl mx-auto">
          Let our AI help you brainstorm engaging blog post topics about transportation and car rentals in Morocco.
        </p>
        <Button
          onClick={handleSuggestTopics}
          disabled={isLoading}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Lightbulb className="mr-2 h-5 w-5" />
          )}
          Suggest Topics
        </Button>

        {topics.length > 0 && (
          <Card className="mt-10 text-left max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Suggested Blog Topics:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-card-foreground">
                {topics.map((topic, index) => (
                  <li key={index} className="text-md">{topic}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
