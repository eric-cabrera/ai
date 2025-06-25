
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIJourneySection = () => {
  return (
    <section className="mb-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            My AI Journey
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              Welcome to my AI exploration space. As a software developer with over 15 years of experience, 
              I'm documenting my journey into the fascinating world of artificial intelligence.
            </p>
            <p>
              This section will evolve as I learn, experiment, and build with various AI tools and technologies. 
              Here you'll find insights, discoveries, challenges, and breakthroughs from my hands-on experience 
              with AI development.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="italic text-gray-600">
                "The best way to understand AI is to build with it." - Coming soon: project updates, 
                learning notes, and real-world applications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AIJourneySection;
