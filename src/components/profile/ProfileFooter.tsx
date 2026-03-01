import Link from 'next/link';

const ProfileFooter = () => {
  return (
    <footer className="mt-20 mb-8 border-t border-white/5 pt-8 text-center">
      <Link 
        href="/" 
        className="group inline-flex items-center space-x-2 text-xs font-medium text-white/30 hover:text-white/60 transition-colors duration-300"
      >
        <span>Built with</span>
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
          SteamRush.gg
        </span>
      </Link>
    </footer>
  );
};

export default ProfileFooter;
