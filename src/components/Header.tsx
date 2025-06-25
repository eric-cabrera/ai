
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="mb-6">
        <Avatar className="w-32 h-32 mx-auto mb-6 border-2 border-gray-200">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Eric Cabrera" />
          <AvatarFallback className="text-2xl font-semibold bg-gray-100">EC</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Eric Cabrera
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Exploring the frontiers of AI through real-world projects.
      </p>
    </header>
  );
};

export default Header;
