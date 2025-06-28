import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TrainingHighlights = () => {
  return (
    <section className="mb-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            Training Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Azure Fundamentals Certification (in progress)</li>
            <li>AI for Beginners Course (Microsoft Learn)</li>
            <li>React & TypeScript Bootcamp</li>
          </ul>
          <Button asChild className="w-full" size="lg">
            <a
              href="/ai/training-highlights"
              className="flex items-center justify-center gap-2"
            >
              View Details
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default TrainingHighlights;
