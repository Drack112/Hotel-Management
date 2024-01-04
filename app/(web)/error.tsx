"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto">
      <div className="font-heading text-red-800 mb-10">
        Something went wrong!
      </div>
      <button
        onClick={() => {
          reset();
        }}
        className="btn-primary"
      >
        Try Again
      </button>
    </div>
  );
}
