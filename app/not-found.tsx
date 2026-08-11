import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-warmwhite">
      <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl tracking-tightest text-slate sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-slate-mid">
          The page you were looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-8">
          <LinkButton href="/" variant="primary">
            Back to home
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
