
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const GeneralAudienceTrack = () => {
  return (
    <section className="mb-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            General Audience Track
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Behind the Scenes
              </h3>
              <p className="text-gray-600 mb-4">
                Curious about how this website was created? Learn about the AI tools and techniques used in its development.
              </p>
              <Button 
                asChild 
                className="w-full"
                size="lg"
              >
                <a 
                  href="/how-this-site-was-built" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  How This Site Was Built Using AI
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Coming Soon
              </h3>
              <p className="text-gray-600 mb-4">
                Project showcases, learning logs, and practical AI applications will be featured here.
              </p>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                disabled
              >
                Project #1 - Coming Soon
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default GeneralAudienceTrack;
