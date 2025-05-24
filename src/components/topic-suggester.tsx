
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
        keywords: 'transportation, car rentals, Morocco, travel tips, road trips, adventure, exploration, itineraries',
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
      <div className="container">
        <div className="text-left max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            Unlock Your Moroccan Adventure: The Freedom of Car Rentals
          </h2>
          <p className="text-lg text-secondary-foreground leading-relaxed">
            Renting a car in Morocco offers an unparalleled opportunity to explore its diverse landscapes, from the bustling souks of Marrakech to the serene beaches of Essaouira, and the majestic Atlas Mountains to the vast Sahara desert. With your own vehicle, you gain the freedom and flexibility to travel at your own pace, discover hidden gems off the beaten path, and create a truly personalized itinerary.
          </p>
          <p className="mt-4 text-lg text-secondary-foreground leading-relaxed">
            Navigating Morocco by car can be an adventure in itself. While major cities are well-connected by highways, venturing into rural areas might present more challenging road conditions. It's advisable to opt for a 4x4 if you plan to explore mountainous regions or desert tracks.
          </p>
          <p className="mt-4 text-lg text-secondary-foreground leading-relaxed">
            Understanding local driving customs, speed limits, and parking regulations is crucial for a smooth experience. Ensure you have a valid international driving permit, along with your regular license. Car rental agencies are abundant in major cities and airports, offering a wide range of vehicles to suit different needs and budgets. Booking in advance, especially during peak tourist seasons, is highly recommended to secure the best deals and vehicle choices.
          </p>
          <p className="mt-4 text-lg text-secondary-foreground leading-relaxed">
            Comprehensive insurance is a must, providing peace of mind as you embark on your Moroccan road trip. Embrace the journey, enjoy the stunning scenery, and immerse yourself in the rich culture that Morocco has to offer, all with the convenience of your rental car.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Need Content Inspiration?
          </h3>
          <p className="mb-8 text-lg text-secondary-foreground max-w-2xl mx-auto">
            Let our AI help you brainstorm engaging blog post topics related to your Moroccan automotive adventures and travel experiences.
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
            Generate Blog Ideas
          </Button>

          {topics.length > 0 && (
            <Card className="mt-10 text-left max-w-2xl mx-auto shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-primary">AI-Suggested Blog Topics:</CardTitle>
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
      </div>
    </section>
  );
}
