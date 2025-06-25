import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="mb-6">
        <Avatar className="w-48 h-48 mx-auto mb-6 border-2 border-gray-200">
          <AvatarImage
            src={`${import.meta.env.BASE_URL}20230831_131327.jpg`}
            alt="Eric Cabrera"
            className="w-48 h-48 object-cover"
          />
          <AvatarFallback className="text-3xl font-semibold bg-gray-100">
            EC
          </AvatarFallback>
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
