import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ae9077] px-4 text-center text-white">
      <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest">
        404
      </h1>

      <div className="mt-2 rounded bg-white px-3 py-1 text-sm font-semibold text-[#ae9077]">
        Page Not Found
      </div>

      <p className="mt-6 max-w-md text-base md:text-lg text-white/90">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-[#ae9077] transition hover:bg-white/90"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
