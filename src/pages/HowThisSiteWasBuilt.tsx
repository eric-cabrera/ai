
import { ArrowLeft, Zap, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowThisSiteWasBuilt = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            asChild
            className="mb-6"
          >
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            How This Site Was Built Using AI
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            A behind-the-scenes look at leveraging AI tools for modern web development
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                The AI-Powered Development Process
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                This website was created using a modern AI-assisted development workflow, demonstrating 
                how artificial intelligence can accelerate and enhance the web development process.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>More content coming soon...</strong> This page will detail the specific AI tools, 
                prompts, and techniques used to build this site, including code generation, design decisions, 
                and optimization strategies.
              </p>
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-green-800">How to Run This Site Locally & Prepare for Production</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Install dependencies:</strong> Run <code>npm install</code> to set up all required packages.</li>
                  <li><strong>Start the development server:</strong> Use <code>npm run dev</code> to preview changes instantly as you code.</li>
                  <li><strong>Build for production:</strong> Run <code>npm run build</code> to generate an optimized static version of the site.</li>
                  <li><strong>Preview the production build:</strong> Use <code>npm run preview</code> to test the final output locally before deploying.</li>
                </ul>
                <p className="mt-4 text-gray-600">This workflow ensures your site is tested and optimized before going live, following best practices for modern web development.</p>
                <p className="mt-2 text-gray-600">For automated deployment, the <code>.github/workflows/deploy.yml</code> file is used. This GitHub Actions workflow builds and deploys your site to GitHub Pages every time you push to the <strong>main</strong> branch.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Technical Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend Technologies</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• React 18 with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Shadcn/ui component library</li>
                    <li>• Vite for build tooling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI Tools Used</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• AI-powered code generation</li>
                    <li>• Automated component creation</li>
                    <li>• Design system implementation</li>
                    <li>• Responsive layout optimization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
                Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic text-center">
                  "AI doesn't replace developers—it amplifies their capabilities. This site showcases 
                  how thoughtful AI integration can streamline development while maintaining code quality 
                  and design excellence."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowThisSiteWasBuilt;
